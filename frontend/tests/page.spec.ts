import { test, expect } from '@playwright/test';

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

    await expect(page.locator('')).toHaveText('Under construction');
})

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