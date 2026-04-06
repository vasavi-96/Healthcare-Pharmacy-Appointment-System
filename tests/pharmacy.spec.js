import { test, expect } from '@playwright/test';

const baseURL = 'https://pharmacy-bookings--vasavichamarthi.replit.app/';

test('pharm1', async ({ page }) => {
  await page.goto(baseURL + '/medicines');
  await expect(page.locator('body')).toBeVisible();
  await expect(page.locator('header')).toBeVisible();
});

test('pharm5', async ({ page }) => {
  await page.goto(baseURL + '/medicines');
  const title = await page.title();
  expect(title.length > 0).toBeTruthy();
});

test('pharm6', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(baseURL + '/medicines');
  await expect(page.locator('body')).toBeVisible();
});

test('pharm7', async ({ page }) => {
  await page.goto(baseURL + '/medicines');
  const text = await page.textContent('body');
  expect(text.length > 300).toBeTruthy();
});

test('pharm8', async ({ page }) => {
  await page.goto(baseURL + '/medicines');
  await expect(page.locator('body')).toBeAttached();
});

test('pharm9', async ({ page }) => {
  await page.goto(baseURL + '/medicines');
  await page.locator('body').scrollIntoViewIfNeeded();
});

test('pharm10', async ({ page }) => {
  await page.goto(baseURL + '/medicines');
  const links = await page.locator('a').count();
  expect(links > 10).toBeTruthy();
});

test('pharm11', async ({ page }) => {
  await page.goto(baseURL + '/medicines');
  await expect(page.locator('body')).toHaveCount(1);
});

test('pharm12', async ({ page }) => {
  await page.goto(baseURL + '/medicines');
  await page.waitForLoadState('networkidle');
});

test('pharm13', async ({ page }) => {
  await page.goto(baseURL + '/medicines');
  await page.waitForTimeout(500);
});

test('pharm14', async ({ page }) => {
  await page.goto(baseURL + '/medicines');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
});

test('pharm15', async ({ page }) => {
  await page.goto(baseURL + '/medicines');
  await expect(page.locator('header')).toBeAttached();
});

test('pharm16', async ({ page }) => {
  await page.goto(baseURL + '/medicines');
  const res = await page.request.get(baseURL + '/api/medicines');
  expect(res.status()).toBeLessThan(500);
});

test('pharm17', async ({ page }) => {
  await page.goto(baseURL + '/medicines');
  await expect(page.locator('body')).toBeVisible();
});
