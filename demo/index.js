import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file and directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.goto(`file://${path.resolve(__dirname, '../index.html')}`);

await page.screenshot({path: 'demo.png'});
await browser.close();
