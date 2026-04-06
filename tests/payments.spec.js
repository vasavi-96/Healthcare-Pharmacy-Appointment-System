import { test, expect } from '@playwright/test';

const baseURL = 'https://pharmacy-bookings--vasavichamarthi.replit.app/';

test('payments1', async ({ page }) => {
  await page.goto(baseURL);
  const count = await page.locator('button').count();
  expect(count > 0).toBeTruthy();
  await expect(page.locator('body')).toBeVisible();
});

test('payments2', async ({ page }) => {
  await page.goto(baseURL);
  const title = await page.title();
  expect(title.length > 0).toBeTruthy();
  await expect(page.locator('header')).toBeVisible();
  await page.waitForTimeout(200);
});

test('payments3', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(baseURL);
  await expect(page.locator('body')).toBeVisible();
  await expect(page.locator('header')).toBeVisible();
});

test('payments4', async ({ page }) => {
  await page.goto(baseURL);
  const text = await page.textContent('body');
  expect(text.length > 100).toBeTruthy();
  await expect(page.locator('nav')).toBeVisible();
});

test('payments5', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('body')).toBeAttached();
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(300);
});

test('payments6', async ({ page }) => {
  await page.goto(baseURL);
  await page.locator('body').scrollIntoViewIfNeeded();
  await expect(page.locator('header')).toBeVisible();
});



test('payments7', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('body')).toHaveCount(1);
  await page.waitForTimeout(100);
});

test('payments8', async ({ page }) => {
  await page.goto(baseURL);
  await page.waitForLoadState('networkidle');
  await expect(page.locator('header')).toBeVisible();
});

test('payments9', async ({ page }) => {
  await page.goto(baseURL);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect(page.locator('body')).toBeVisible();
});

test('payments10', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('header')).toBeAttached();
  await page.waitForLoadState('load');
});

test('payments11', async ({ page }) => {
  await page.goto(baseURL);
  const res = await page.request.get(baseURL + '/api/payments');
  expect(res.status()).toBeLessThan(500);
  await expect(page.locator('body')).toBeVisible();
});

test('payments12', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('body')).toBeVisible();
  await page.waitForTimeout(1000);
  await expect(page.locator('header')).toBeVisible();
});
