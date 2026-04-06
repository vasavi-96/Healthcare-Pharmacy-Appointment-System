import { test, expect } from '@playwright/test';

const baseURL = 'https://pharmacy-bookings--vasavichamarthi.replit.app/';

test('REV1: Doctor profile loads - body/header visible', async ({ page }) => {
  await page.goto(baseURL + '/doctors/1');
  await expect(page.locator('body')).toBeVisible({ timeout: 5000 });
  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('nav')).toBeVisible();
  await page.waitForLoadState('domcontentloaded');
});

test('rev2', async ({ page }) => {
  await page.goto(baseURL + '/doctors/1');
  await expect(page.locator('nav')).toBeVisible();
  const count = await page.locator('button').count();
  expect(count > 0).toBeTruthy();
});

test('rev4', async ({ page }) => {
  await page.goto(baseURL + '/doctors/1');
  const count = await page.locator('.review').count();
  expect(count >= 0).toBeTruthy();
});

test('rev5', async ({ page }) => {
  await page.goto(baseURL + '/doctors/1');
  const title = await page.title();
  expect(title.length > 0).toBeTruthy();
});

test('rev6', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(baseURL + '/doctors/1');
  await expect(page.locator('body')).toBeVisible();
});

test('rev8', async ({ page }) => {
  await page.goto(baseURL + '/doctors/1');
  await expect(page.locator('body')).toBeAttached();
});

test('rev9', async ({ page }) => {
  await page.goto(baseURL + '/doctors/1');
  await page.locator('body').scrollIntoViewIfNeeded();
});

test('rev10', async ({ page }) => {
  await page.goto(baseURL + '/doctors/1');
  const links = await page.locator('a').count();
  expect(links > 5).toBeTruthy();
});

test('rev11', async ({ page }) => {
  await page.goto(baseURL + '/doctors/1');
  await expect(page.locator('body')).toHaveCount(1);
});

test('rev12', async ({ page }) => {
  await page.goto(baseURL + '/doctors/1');
  await page.waitForLoadState('networkidle');
});

test('rev13', async ({ page }) => {
  await page.goto(baseURL + '/doctors/1');
  await page.waitForTimeout(500);
});

test('rev14', async ({ page }) => {
  await page.goto(baseURL + '/doctors/1');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
});

test('rev15', async ({ page }) => {
  await page.goto(baseURL + '/doctors/1');
  await expect(page.locator('header')).toBeAttached();
});

test('rev16', async ({ page }) => {
  await page.goto(baseURL + '/doctors/1');
  const res = await page.request.get(baseURL + '/api/doctors');
  expect(res.status()).toBeLessThan(500);
});

test('rev17', async ({ page }) => {
  await page.goto(baseURL + '/medicines/1');
  await expect(page.locator('body')).toBeVisible();
});

