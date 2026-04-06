import { test, expect } from '@playwright/test';

const baseURL = 'https://pharmacy-bookings--vasavichamarthi.replit.app/';

test('S1: Root page stable load', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('body')).toBeVisible();
  await expect(page.locator('header')).toBeVisible();
  await page.waitForLoadState('domcontentloaded');
});

test('S2: Navigation present', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('nav')).toBeVisible();
  const buttons = await page.locator('button').count();
  expect(buttons > 0).toBeTruthy();
});

test('S3: Multiple links validation', async ({ page }) => {
  await page.goto(baseURL);
  const links = await page.locator('a').count();
  expect(links > 5).toBeTruthy();
});

test('S4: Title exists', async ({ page }) => {
  await page.goto(baseURL);
  const title = await page.title();
  expect(title.length > 0).toBeTruthy();
});

test('S5: Mobile viewport stable', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(baseURL);
  await expect(page.locator('body')).toBeVisible();
});

test('S6: Content length substantial', async ({ page }) => {
  await page.goto(baseURL);
  const text = await page.textContent('body');
  expect(text.length > 100).toBeTruthy();
});

test('S7: Body attached', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('body')).toBeAttached();
});

test('S8: Scroll functionality', async ({ page }) => {
  await page.goto(baseURL);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
});

test('S9: Network idle load', async ({ page }) => {
  await page.goto(baseURL);
  await page.waitForLoadState('networkidle');
});

test('S10: Timeout stability', async ({ page }) => {
  await page.goto(baseURL);
  await page.waitForTimeout(500);
});

test('S11: Header attached', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('header')).toBeAttached();
});

test('S12: Button count validation', async ({ page }) => {
  await page.goto(baseURL);
  const count = await page.locator('button').count();
  expect(count > 0).toBeTruthy();
});