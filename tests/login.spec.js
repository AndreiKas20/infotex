// @ts-check
const { test, expect } = require('@playwright/test');

test('has Login', async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  await page.fill('input[id="userName"]', 'Andr');
  await page.fill('input[id="password"]', 'Qwerty123!');
  await page.click('button[id="login"]');
  const locator = page.locator('label[id="userName-value"]');
  await expect(locator).toHaveText(/Andr/);
});

