import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const flatSvg = path.join(root, "public/logos/infinite-vision-icon-flat.svg");

async function generate() {
  const svg = fs.readFileSync(flatSvg);
  const sizes = [
    { out: "app/icon.png", size: 512 },
    { out: "app/apple-icon.png", size: 180 },
    { out: "public/logos/infinite-vision-icon-flat-512.png", size: 512 },
    { out: "public/logos/infinite-vision-icon-flat-192.png", size: 192 },
    { out: "public/logos/infinite-vision-icon-flat-32.png", size: 32 },
  ];

  for (const { out, size } of sizes) {
    await sharp(svg, { density: 300 })
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(root, out));
    console.log(`Created ${out} (${size}px)`);
  }
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
