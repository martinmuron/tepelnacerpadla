import { test, expect } from '@playwright/test';

test.describe('Contact Page Tests', () => {
  test('should load contact page correctly', async ({ page }) => {
    await page.goto('/kontakt');
    
    // Check page title
    await expect(page.getByText('Kontaktujte nás')).toBeVisible();
    
    // Check main sections
    await expect(page.getByText('Nezávazná poptávka')).toBeVisible();
    await expect(page.getByText('Kontaktní informace')).toBeVisible();
    await expect(page.getByText('Proces spolupráce')).toBeVisible();
  });

  test('should have comprehensive contact form', async ({ page }) => {
    await page.goto('/kontakt');
    
    // Check form fields exist
    await expect(page.locator('#firstName')).toBeVisible();
    await expect(page.locator('#lastName')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#phone')).toBeVisible();
    await expect(page.locator('#address')).toBeVisible();
    await expect(page.locator('#houseType')).toBeVisible();
    await expect(page.locator('#area')).toBeVisible();
    await expect(page.locator('#currentHeating')).toBeVisible();
    await expect(page.locator('#preferredBrand')).toBeVisible();
    await expect(page.locator('#budget')).toBeVisible();
    await expect(page.locator('#timeline')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
    await expect(page.locator('#gdpr')).toBeVisible();
    await expect(page.locator('#newsletter')).toBeVisible();
  });

  test('should fill out contact form correctly', async ({ page }) => {
    await page.goto('/kontakt');
    
    // Fill out required fields
    await page.fill('#firstName', 'Jan');
    await page.fill('#lastName', 'Novák');
    await page.fill('#email', 'jan.novak@email.cz');
    await page.fill('#phone', '+420 123 456 789');
    await page.selectOption('#houseType', 'rodinny-dum');
    await page.fill('#area', '150');
    
    // Fill optional fields
    await page.fill('#address', 'Praha 1, 110 00');
    await page.selectOption('#currentHeating', 'plyn');
    await page.selectOption('#preferredBrand', 'viessmann');
    await page.selectOption('#budget', '300-500k');
    await page.selectOption('#timeline', '3-6-mesicu');
    await page.fill('#message', 'Zajímá mě instalace tepelného čerpadla pro rodinný dům.');
    
    // Check required checkbox
    await page.check('#gdpr');
    
    // Optional newsletter checkbox
    await page.check('#newsletter');
    
    // Verify form is filled
    await expect(page.locator('#firstName')).toHaveValue('Jan');
    await expect(page.locator('#lastName')).toHaveValue('Novák');
    await expect(page.locator('#email')).toHaveValue('jan.novak@email.cz');
    await expect(page.locator('#gdpr')).toBeChecked();
  });

  test('should display contact information', async ({ page }) => {
    await page.goto('/kontakt');
    
    // Check contact details
    await expect(page.getByText('+420 XXX XXX XXX')).toBeVisible();
    await expect(page.getByText('info@tepelnacerpadla.cz')).toBeVisible();
    await expect(page.getByText('Praha, Brno, Ostrava')).toBeVisible();
    await expect(page.getByText('Po-Pá: 8:00 - 17:00')).toBeVisible();
  });

  test('should show process steps', async ({ page }) => {
    await page.goto('/kontakt');
    
    // Check all 5 process steps
    await expect(page.getByText('Nezávazná poptávka')).toBeVisible();
    await expect(page.getByText('Konzultace')).toBeVisible();
    await expect(page.getByText('Obhlídka a návrh')).toBeVisible();
    await expect(page.getByText('Instalace')).toBeVisible();
    await expect(page.getByText('Servis')).toBeVisible();
  });
});