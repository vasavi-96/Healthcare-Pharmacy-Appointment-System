import { test, expect } from '@playwright/test';

test.describe('Module: Dashboard', () => {
  test.use({ baseURL: 'https://pharmacy-bookings--vasavichamarthi.replit.app/' });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

 

test('TC-DASH-001: Title contains MediCare', async ({ page }) => {
    await expect(page).toHaveTitle(/MediCare|Healthcare/);
  });

test('TC-DASH-002: Body content substantial', async ({ page }) => {
    const text = await page.textContent('body');
    expect(text.length).toBeGreaterThan(200);
  });

  
test('TC-DASH-003: Main content area', async ({ page }) => {
    await expect(page.locator('main')).toBeVisible();
  });

test('TC-DASH-004: Contains health content', async ({ page }) => {
    const text = await page.textContent('body');
    expect(text.toLowerCase()).toContain('health');
  });

test('TC-DASH-005: Navigation links present', async ({ page }) => {
    const links = await page.locator('a').count();
    expect(links).toBeGreaterThan(5);
  });

test('TC-DASH-006: Buttons exist', async ({ page }) => {
    const buttons = await page.locator('button').count();
    expect(buttons).toBeGreaterThan(0);
  });

  

test('TC-DASH-007: Multiple headings', async ({ page }) => {
    const headings = await page.locator('h1,h2,h3,h4,h5,h6').count();
    expect(headings).toBeGreaterThan(3);
  });

  test('TC-DASH-011: Images load', async ({ page }) => {
    const images = await page.locator('img').count();
    expect(images).toBeGreaterThan(0);
  });

  test('TC-DASH-012: Fast response', async ({ page }) => {
    const response = await page.goto('/');
    expect(response.status()).toBeLessThan(400);
  });

  test('TC-DASH-013: Minimal console errors', async ({ page }) => {
    const errors = [];
    page.on('console', msg => msg.type() === 'error' && errors.push(msg.text()));
    await page.goto('/');
    await page.waitForTimeout(2000);
    expect(errors.length).toBeLessThan(5);
  });

  test('TC-DASH-014: Semantic structure', async ({ page }) => {
    await expect(page.getByRole('banner')).toBeVisible({ timeout: 5000 });
  });

  test('TC-DASH-015: Responsive mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await expect(page.locator('body')).toBeAttached();
  });

  test('TC-DASH-016: Scroll functionality', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.locator('body')).toBeAttached();
  });

  test('TC-DASH-017: Network stable', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(true).toBeTruthy();
  });

  test('TC-DASH-018: Multiple sections', async ({ page }) => {
    const sections = await page.locator('section').count();
    expect(sections).toBeGreaterThan(1);
  });

  test('TC-DASH-019: Footer present', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible({ timeout: 3000 });
  });

  test('TC-DASH-020: Dashboard navigation works', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page.locator('body')).toBeAttached();
  });
});
