# Infinite Vision Logo Assets

Refined brand-aligned logo variants for Infinite Vision, Incorporated.

## Palette
| Token | Hex | Use |
|-------|-----|-----|
| Deep Navy | `#0A1A2F` | Primary shape, trust |
| Muted Gold | `#C8A45D` | Accent, wordmark |
| Gold Light | `#D4B06E` | Navy-background readability |
| Navy Mid | `#122640` | Shape contrast on dark backgrounds |

## Files

| File | Variant | Use |
|------|---------|-----|
| `infinite-vision-icon-flat.svg` | Flat UI | Favicon source, small UI, light backgrounds |
| `infinite-vision-icon-navy.svg` | Navy-optimized | Header, dark backgrounds |
| `infinite-vision-icon-hero.svg` | Hero-optimized | Photography overlays, hero sections |
| `infinite-vision-horizontal.svg` | Horizontal | Navigation, letterhead |
| `infinite-vision-stacked.svg` | Stacked | Print, social, hero lockups |
| `infinite-vision-icon-flat-*.png` | Icon-only PNG | Favicon, app icons, badges |

## Regenerating PNG favicons
```bash
node scripts/generate-logo-pngs.mjs
```

## React component
Use `<Logo variant="horizontal" />` from `app/components/Logo.js`.

Variants: `flat`, `navy`, `hero`, `icon`, `horizontal`, `stacked`

## Legacy
Original metallic logo preserved at `public/infinite-vision-logo.png`.
