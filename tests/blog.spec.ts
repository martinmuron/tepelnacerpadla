import { test, expect } from '@playwright/test';

test.describe('Blog Tests', () => {
  test('should load blog index page', async ({ page }) => {
    await page.goto('/blog');
    
    // Check page title
    await expect(page.getByText('Blog o tepelných čerpadlech')).toBeVisible();
    
    // Check featured article
    await expect(page.getByText('Doporučený článek')).toBeVisible();
    
    // Check article grid
    await expect(page.getByText('Všechny články')).toBeVisible();
    
    // Check newsletter signup
    await expect(page.getByText('Nezmeškejte nové články')).toBeVisible();
  });

  test('should display blog articles with proper metadata', async ({ page }) => {
    await page.goto('/blog');
    
    // Check first article has all required elements
    await expect(page.getByText('Dotace na tepelná čerpadla v roce 2024-2025')).toBeVisible();
    await expect(page.getByText('Dotace')).toBeVisible(); // Category badge
    await expect(page.getByText('8 min')).toBeVisible(); // Read time
  });

  test('should navigate to individual blog posts', async ({ page }) => {
    await page.goto('/blog');
    
    // Click on first article
    await page.getByText('Číst článek').first().click();
    
    // Should navigate to article page
    await expect(page).toHaveURL(/\/blog\/dotace-na-tepelna-cerpadla-2024-2025/);
    await expect(page.getByText('Dotace na tepelná čerpadla v roce 2024-2025: Kompletní průvodce')).toBeVisible();
  });

  test('should load individual blog post correctly', async ({ page }) => {
    await page.goto('/blog/dotace-na-tepelna-cerpadla-2024-2025');
    
    // Check article content
    await expect(page.getByText('Dotace na tepelná čerpadla v roce 2024-2025: Kompletní průvodce')).toBeVisible();
    await expect(page.getByText('Získejte až 180 000 Kč')).toBeVisible();
    
    // Check back link
    await expect(page.getByText('← Zpět na blog')).toBeVisible();
    
    // Check CTA section
    await expect(page.getByText('Potřebujete pomoc s výběrem tepelného čerpadla?')).toBeVisible();
    
    // Check related articles
    await expect(page.getByText('Související články')).toBeVisible();
  });

  test('should handle non-existent blog posts', async ({ page }) => {
    // This should return 404 for non-existent posts
    const response = await page.goto('/blog/nonexistent-post');
    expect(response?.status()).toBe(404);
  });
});