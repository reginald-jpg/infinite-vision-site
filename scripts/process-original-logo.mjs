import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logoPath = path.join(root, "public/infinite-vision-logo.png");

/** Remove near-black background pixels so the original mark blends on navy UI. */
function removeBlackBackground(data, channels) {
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;

    // Transparent for solid/near-black background; keep dark logo interior details.
    if (max < 42 && saturation < 0.2) {
      data[i + 3] = 0;
    } else if (max < 58 && saturation < 0.12) {
      data[i + 3] = Math.min(data[i + 3], 64);
    }
  }
}

async function processLogo() {
  const { data, info } = await sharp(logoPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const buffer = Buffer.from(data);
  removeBlackBackground(buffer, info.channels);

  await sharp(buffer, {
    raw: { width: info.width, height: info.height, channels: info.channels },
  })
    .png()
    .toFile(logoPath);

  const faviconSizes = [
    { out: "app/icon.png", size: 512 },
    { out: "app/apple-icon.png", size: 180 },
  ];

  for (const { out, size } of faviconSizes) {
    await sharp(logoPath)
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(root, out));
  }

  console.log("Updated transparent logo and favicons.");
}

processLogo().catch((err) => {
  console.error(err);
  process.exit(1);
});
