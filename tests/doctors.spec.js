import { test, expect } from '@playwright/test';

test.describe('Module: Doctors', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/doctors', { waitUntil: 'networkidle' });
  });

  // test('TC-DOC-002: Doctor cards count is positive', async ({ page }) => {
  //   const cards = page.getByRole('heading', { name: /^Dr\./i });
  //   expect(await cards.count()).toBeGreaterThan(0);
  // });

  test('TC-DOC-003: Searchable specialties are visible', async ({ page }) => {
    await expect(page.locator('text=Cardiologist')).toBeVisible();
    await expect(page.locator('text=Gynecologist')).toBeVisible();
  });

  test('TC-DOC-004: Doctor profile page loads', async ({ page }) => {
    await page.goto('/doctors/1', { waitUntil: 'networkidle' });
    await expect(page.getByRole('heading', { name: /Dr\. Rajesh Kumar/i })).toBeVisible();
  });

  test('TC-DOC-005: Doctor API payload contains doctors', async ({ page }) => {
    const response = await page.request.get('/api/doctors');
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(Array.isArray(body.doctors)).toBeTruthy();
    expect(body.doctors.length).toBeGreaterThan(0);
  });

  test('TC-DOC-006: Doctor profile shows consultation fee', async ({ page }) => {
    await page.goto('/doctors/1', { waitUntil: 'networkidle' });
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('Consultation Fee');
    expect(bodyText).toContain('₹1200');
  });

  test('TC-DOC-007: Booking section is visible on profile', async ({ page }) => {
    await page.goto('/doctors/1', { waitUntil: 'networkidle' });
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('Select a date');
    expect(bodyText).toContain('Select time');
  });

  test('TC-DOC-008: Doctor list contains review ratings', async ({ page }) => {
    const bodyText = await page.textContent('body');
    expect(bodyText).toMatch(/4\.8\(312\)/);
    expect(bodyText).toMatch(/4\.9\(245\)/);
  });

  test('TC-DOC-009: Doctor profile has biography section', async ({ page }) => {
    await page.goto('/doctors/1', { waitUntil: 'networkidle' });
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('Biography');
  });

  test('TC-DOC-010: Doctor profile shows hospital details', async ({ page }) => {
    await page.goto('/doctors/1', { waitUntil: 'networkidle' });
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('Apollo Hospital');
    expect(bodyText).toContain('Mumbai, Maharashtra');
  });

  test('TC-DOC-011: Doctor list shows availability text', async ({ page }) => {
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('Available Today');
  });

  test('TC-DOC-012: Doctor profile has back link', async ({ page }) => {
    await page.goto('/doctors/1', { waitUntil: 'networkidle' });
    expect(await page.locator('text=Back to Doctors').count()).toBeGreaterThan(0);
  });

  test('TC-DOC-013: Doctor profile page shows experience', async ({ page }) => {
    await page.goto('/doctors/1', { waitUntil: 'networkidle' });
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('18 Years Experience');
  });

  test('TC-DOC-014: Doctor profile has mobile-friendly booking section', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/doctors/1', { waitUntil: 'networkidle' });
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('Confirm Booking');
  });

  test('TC-DOC-015: Doctor profile includes rating label', async ({ page }) => {
    await page.goto('/doctors/1', { waitUntil: 'networkidle' });
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('Rating');
  });

  test('TC-DOC-016: Doctor directory includes multiple specializations', async ({ page }) => {
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('Pediatrician');
    expect(bodyText).toContain('Dermatologist');
  });

  test('TC-DOC-017: Doctor page handles query string navigation', async ({ page }) => {
    await page.goto('/doctors?page=2');
    await expect(page.getByRole('heading', { name: /find a doctor/i })).toBeVisible();
  });
});
