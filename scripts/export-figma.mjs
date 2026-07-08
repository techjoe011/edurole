import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright-core";

const port = 3100;
const baseUrl = `http://127.0.0.1:${port}`;
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const routes = [
  ["home", "/"],
  ["about", "/about"],
  ["products", "/products"],
  ["campus", "/campus"],
  ["school", "/school"],
  ["emis", "/emis"],
  ["clients", "/clients"],
  ["contact", "/contact"],
];
const sizes = [
  ["desktop", { width: 1440, height: 1000 }],
  ["mobile", { width: 390, height: 844 }],
];

await mkdir("figma-export/desktop", { recursive: true });
await mkdir("figma-export/mobile", { recursive: true });

const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "-p", String(port)],
  { stdio: "inherit" },
);

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  throw new Error("The local Next.js server did not become ready.");
}

let browser;
try {
  await waitForServer();
  browser = await chromium.launch({ executablePath: chromePath, headless: true });

  for (const [sizeName, viewport] of sizes) {
    const context = await browser.newContext({
      viewport,
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();

    for (const [name, route] of routes) {
      await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
      await page.addStyleTag({
        content: `
          .reveal-item { opacity: 1 !important; transform: none !important; }
          .route-loading { display: none !important; }
        `,
      });
      await page.screenshot({
        path: `figma-export/${sizeName}/${name}.png`,
        fullPage: true,
      });
      console.log(`Exported ${sizeName}/${name}.png`);
    }

    await context.close();
  }
} finally {
  if (browser) await browser.close();
  server.kill("SIGTERM");
}
