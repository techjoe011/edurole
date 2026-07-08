# EduRole Figma handoff

## Import the presentation frames

1. Open a Figma design file.
2. Drag the PNG files from `desktop/` and `mobile/` onto the canvas.
3. Keep desktop frames at 1440px wide and mobile frames at 390px wide.

These exports are full-page, pixel-accurate snapshots of the implemented website.

## Import as editable layers

For editable text, colours and layout layers:

1. Run `npm run dev`.
2. Open the website in Chrome at `http://localhost:3000`.
3. In Figma, install an HTML-to-Figma plugin such as `html.to.design`.
4. Use the plugin or its browser extension to capture each route.

HTML-to-Figma conversion is useful for design iteration, but generated layer names and
auto-layout structure usually need cleanup before treating the file as a design system.

## Regenerate exports

First create a current production build:

```bash
npm run build
npm run export:figma
```
