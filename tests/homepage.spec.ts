import { test, expect } from '@playwright/test';

test.describe('Homepage Tests', () => {
  test('should load homepage with proper title and structure', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle(/TeplnaCerpadla/);
    
    // Check main heading
    await expect(page.getByText('Tepelná čerpadla pro váš domov')).toBeVisible();
    
    // Check navigation
    await expect(page.getByText('TeplnaCerpadla.cz')).toBeVisible();
    await expect(page.getByText('Produkty')).toBeVisible();
    await expect(page.getByText('Blog')).toBeVisible();
    await expect(page.getByText('Kontakt')).toBeVisible();
    
    // Check hero section badge
    await expect(page.getByText('Na trhu...Vše za trvalé nejnižší ceny …Garantováno')).toBeVisible();
    
    // Check CTA buttons
    await expect(page.getByText('Zobrazit produkty')).toBeVisible();
    await expect(page.getByText('Nezávazná poptávka')).toBeVisible();
  });

  test('should display all brand cards', async ({ page }) => {
    await page.goto('/');
    
    // Check all 8 brands are displayed
    const brands = ['IVT', 'Bosch', 'Viessmann', 'NIBE', 'Panasonic', 'LG', 'Vaillant', 'Stiebel Eltron'];
    
    for (const brand of brands) {
      await expect(page.getByText(brand, { exact: false })).toBeVisible();
    }
  });

  test('should navigate to brand pages when clicking brand cards', async ({ page }) => {
    await page.goto('/');
    
    // Click on IVT brand
    await page.getByText('IVT').first().click();
    
    // Should navigate to IVT brand page
    await expect(page).toHaveURL('/znacky/ivt');
    await expect(page.getByText('IVT Tepelná čerpadla')).toBeVisible();
  });

  test('should have responsive design', async ({ page }) => {
    await page.goto('/');
    
    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.getByText('Tepelná čerpadla pro váš domov')).toBeVisible();
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByText('Tepelná čerpadla pro váš domov')).toBeVisible();
  });

  test('should have proper color scheme', async ({ page }) => {
    await page.goto('/');
    
    // Check if primary color (teal #00F5D0) is applied
    const primaryElement = page.getByText('TeplnaCerpadla.cz').first();
    await expect(primaryElement).toHaveCSS('color', 'rgb(0, 245, 208)');
  });
});