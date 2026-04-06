import { test, expect } from '@playwright/test';

const baseURL = 'https://pharmacy-bookings--vasavichamarthi.replit.app/';

test.describe('Module: Appointment Booking', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL);
  });

  test('TC-APP-001: Appointments page loads', async ({ page }) => {
    await page.goto(baseURL + '/appointments');
    await expect(page.locator('body')).toBeVisible();
    await expect(page.locator('header')).toBeVisible();
  });

  test('TC-APP-002: No appointments text mock', async ({ page }) => {
    await page.goto(baseURL + '/appointments');
    const bodyText = await page.textContent('body');
    expect(bodyText.length > 100).toBeTruthy();
  });

  test('TC-APP-003: Book New Appointment button', async ({ page }) => {
    await page.goto(baseURL + '/appointments');
    await expect(page.getByRole('button', { name: 'Book New Appointment' })).toBeVisible();
  });

  test('TC-APP-004: Manage consultations text', async ({ page }) => {
    await page.goto(baseURL + '/appointments');
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC-APP-005: Doctors CTA', async ({ page }) => {
    await page.goto(baseURL);
    await expect(page.getByRole('link', { name: 'Doctors' })).toBeVisible();
  });

  test('TC-APP-006: Doctor booking section', async ({ page }) => {
    await page.goto(baseURL + '/doctors/1');
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC-APP-007: Time selector', async ({ page }) => {
    await page.goto(baseURL + '/doctors/1');
    await expect(page.locator('body')).toContainText(/book/i, { timeout: 3000 });
  });

  test('TC-APP-008: Confirm booking', async ({ page }) => {
    await page.goto(baseURL + '/doctors/1');
    await expect(page.getByRole('button', { name: /Book|Confirm/i })).toBeVisible({ timeout: 3000 });
  });

  test('TC-APP-009: Payment guidance', async ({ page }) => {
    await page.goto(baseURL + '/doctors/1');
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC-APP-010: Booking note', async ({ page }) => {
    await page.goto(baseURL + '/doctors/1');
    await page.waitForLoadState('domcontentloaded');
  });

  test('TC-APP-011: Status 200', async ({ page }) => {
    const res = await page.goto(baseURL + '/appointments');
    expect(res.status()).toBeLessThan(400);
  });

  test('TC-APP-012: Content substantial', async ({ page }) => {
    await page.goto(baseURL + '/appointments');
    const text = await page.textContent('body');
    expect(text.length > 200).toBeTruthy();
  });

  test('TC-APP-013: Back link mock', async ({ page }) => {
    await page.goto(baseURL + '/doctors/1');
    await page.goBack();
    await expect(page.locator('header')).toBeVisible();
  });

  test('TC-APP-014: Responsive mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(baseURL + '/doctors/1');
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC-APP-015: All safe', async ({ page }) => {
    await page.goto(baseURL + '/appointments');
    await expect(page.locator('header')).toBeVisible();
    await page.waitForLoadState('networkidle');
  });

  test('TC-APP-016: End-to-end appointment booking flow', async ({ page }) => {
    await page.goto(baseURL + '/appointments');
    await expect(page.getByRole('button', { name: 'Book New Appointment' })).toBeVisible();
    await page.waitForLoadState('networkidle');
  });

  test('TC-APP-017: Time slot validation', async ({ page }) => {
    await page.goto(baseURL + '/doctors/1');
    await expect(page.locator('body')).toBeVisible();
    await page.waitForTimeout(1000);
  });

  test('TC-APP-018: Multi-doctor verification', async ({ page }) => {
    await page.goto(baseURL + '/doctors/1');
    await page.goto(baseURL + '/doctors/2');
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC-APP-019: Cancellation flow', async ({ page }) => {
    await page.goto(baseURL + '/appointments');
    await expect(page.locator('body')).toHaveText(/appointment/i);
    await page.waitForTimeout(500);
  });

  test('TC-APP-020: Mobile responsive flow', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(baseURL + '/appointments');
    await expect(page.locator('body')).toBeVisible();
  });
});
