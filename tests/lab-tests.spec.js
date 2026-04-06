import { test, expect } from '@playwright/test';

const baseURL = 'https://pharmacy-bookings--vasavichamarthi.replit.app/';

test('1', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('body')).toBeVisible();
  await expect(page.locator('header')).toBeVisible();
  await page.waitForLoadState('domcontentloaded');
});

test('2', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('nav')).toBeVisible();
  await expect(page.locator('body')).toBeVisible();
  await page.waitForTimeout(500);
});

test('3', async ({ page }) => {
  await page.goto(baseURL);
  const count = await page.locator('button').count();
  expect(count > 0).toBeTruthy();
  await expect(page.locator('header')).toBeVisible();
});

test('4', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('body')).toContainText('MediCare');
  await page.waitForTimeout(100);
});

test('5', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(baseURL);
  await expect(page.locator('body')).toBeVisible();
});

test('6', async ({ page }) => {
  await page.goto(baseURL);
  const title = await page.title();
  expect(title.length > 0).toBeTruthy();
  await expect(page.locator('header')).toBeVisible();
});

test('7', async ({ page }) => {
  await page.goto(baseURL);
  await page.locator('body').scrollIntoViewIfNeeded();
  await expect(page.locator('body')).toBeVisible();
});

test('8', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('body')).toBeAttached();
  await page.waitForLoadState('domcontentloaded');
});

test('9', async ({ page }) => {
  await page.goto(baseURL);
  const text = await page.textContent('body');
  expect(text.length > 100).toBeTruthy();
});

test('10', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('body')).toBeVisible();
  await page.waitForTimeout(1000);
});

test('11', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('header')).toBeAttached();
  await page.waitForLoadState('networkidle');
});

test('12', async ({ page }) => {
  await page.goto(baseURL);
  const links = await page.locator('a').count();
  expect(links > 2).toBeTruthy();
});

test('13', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('body')).toHaveCount(1);
});

test('14', async ({ page }) => {
  await page.goto(baseURL);
  await page.evaluate(() => window.scrollTo(0, 500));
  await expect(page.locator('body')).toBeVisible();
});

test('15', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('header')).toBeVisible();
  await page.waitForLoadState('load');
});
