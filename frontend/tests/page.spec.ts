import { test, devices, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Motivation Machine/);
});

test('get motivated gear on button click', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    // Expects the page to not yet show the gear
    await expect(page.locator('.motivator-gear')).toBeHidden();

    // Click the get motivated button.
    await page.getByRole('button', { name: 'Get motivated' }).click();

    // Expects page to display a gear for motivation
    await expect(page.locator('.motivator-gear')).toBeVisible();
});

test('get under construction warning', async ({page}) => {
    await page.goto('http://localhost:3000/');

    await expect(page.getByRole('heading', { level: 6, name: 'Under construction' })).toBeVisible();
});

test('category selector is rendered', async ({ page }) => {
    await page.setViewportSize({ width: 600, height: 720 });
    await page.goto('http://localhost:3000/');

    // Expects the page to show the category selector
    await expect(page.locator('.category-selector')).toBeVisible();
    await expect(page.locator('.left-side')).toBeVisible();
});

test('category selector for phone', async ({ page }) => {
    await page.setViewportSize({ width: 599, height: 720 });
    await page.goto('http://localhost:3000/');

    // Expects the page to show the category selector
    await expect(page.locator('.category-selector')).toBeVisible();
    await expect(page.locator('.left-side')).not.toBeVisible();
});

test('get gear direction', async ({ page }) => {
  await page.goto('http://localhost:3000/');

    // Click the get motivated button.
    const button = page.getByRole('button', { name: 'Get motivated' });
    await button.click();
    await button.click();
    await button.click();
    await button.click();

    // Expects the page to show the logo
    const gears = page.locator('.motivator-gear');
    await expect(gears.nth(0)).toHaveCSS('animation', /^((?!reverse).)*$/);
    await expect(gears.nth(1)).toHaveCSS('animation', /^.*reverse.*$/);
    await expect(gears.nth(2)).toHaveCSS('animation', /^((?!reverse).)*$/);
    await expect(gears.nth(3)).toHaveCSS('animation', /^.*reverse.*$/);
});