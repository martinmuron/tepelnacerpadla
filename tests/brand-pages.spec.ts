import { test, expect } from '@playwright/test';

test.describe('Brand Pages Tests', () => {
  const brands = [
    { slug: 'ivt', name: 'IVT' },
    { slug: 'bosch', name: 'Bosch' },
    { slug: 'viessmann', name: 'Viessmann' },
    { slug: 'nibe', name: 'NIBE' },
    { slug: 'panasonic', name: 'Panasonic' },
    { slug: 'lg', name: 'LG' },
    { slug: 'vaillant', name: 'Vaillant' },
    { slug: 'stiebel-eltron', name: 'Stiebel Eltron' }
  ];

  for (const brand of brands) {
    test(`should load ${brand.name} brand page correctly`, async ({ page }) => {
      await page.goto(`/znacky/${brand.slug}`);
      
      // Check page title contains brand name
      await expect(page.getByText(`${brand.name} Tepelná čerpadla`)).toBeVisible();
      
      // Check navigation back to homepage works
      await expect(page.getByText('TeplnaCerpadla.cz')).toBeVisible();
      
      // Check products section
      await expect(page.getByText('Dostupné modely')).toBeVisible();
      
      // Check contact form sidebar
      await expect(page.getByText('Máte zájem?')).toBeVisible();
      await expect(page.getByText('Vyplňte formulář a ozveme se vám do 24 hodin')).toBeVisible();
    });
  }

  test('should display product information correctly', async ({ page }) => {
    await page.goto('/znacky/ivt');
    
    // Check product cards have required information
    await expect(page.getByText('Greenline HE 6')).toBeVisible();
    await expect(page.getByText('6 kW')).toBeVisible();
    await expect(page.getByText('A++', { exact: false })).toBeVisible();
    await expect(page.getByText('Od 180 000 Kč')).toBeVisible();
  });

  test('should have working contact form', async ({ page }) => {
    await page.goto('/znacky/bosch');
    
    // Fill out contact form
    await page.fill('#name', 'Jan Novák');
    await page.fill('#email', 'jan@test.cz');
    await page.fill('#phone', '+420 123 456 789');
    await page.selectOption('#house-type', 'rodinny-dum');
    await page.fill('#area', '150');
    
    // Check form elements are properly filled
    await expect(page.locator('#name')).toHaveValue('Jan Novák');
    await expect(page.locator('#email')).toHaveValue('jan@test.cz');
    await expect(page.locator('#phone')).toHaveValue('+420 123 456 789');
  });

  test('should handle non-existent brand gracefully', async ({ page }) => {
    await page.goto('/znacky/nonexistent');
    
    // Should show "brand not found" message
    await expect(page.getByText('Značka nenalezena')).toBeVisible();
    await expect(page.getByText('Zpět na hlavní stránku')).toBeVisible();
  });
});