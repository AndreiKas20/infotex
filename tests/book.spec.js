import { test, expect } from '@playwright/test';

test('search input', async ({ page }) => {
    await page.goto('https://demoqa.com/books')
    await page.fill('input[id="searchBox"]', 'AnyBook')
    const locatorSearch = page.locator('input[id="searchBox"]')
    await expect(locatorSearch).toHaveValue(/AnyBook/)
});

test('row test', async ({ page }) => {
    await page.goto('https://demoqa.com/books')
    const locatorSelectRows = page.locator('.select-wrap').locator('select')
    await locatorSelectRows.selectOption('5')
    await expect(locatorSelectRows).toHaveValue(/5/)

});
test('count page test', async ({ page }) => {
    await page.goto('https://demoqa.com/books')
    const locatorSearch = page.locator('input[id="searchBox"]')
    await locatorSearch.fill('')
    const locatorSelectRows = page.locator('.select-wrap').locator('select')
    await locatorSelectRows.selectOption('5')
    const locatorPageValue = page.locator('.-pageJump').locator('input')
    const locatorButtonNext = page.locator('.-next').locator('button')
    const locatorButtonPrev = page.locator('.-previous').locator('button')
    await locatorButtonNext.click()
    await expect(locatorPageValue).toHaveValue(/2/)
    await locatorButtonPrev.click()
    await expect(locatorPageValue).toHaveValue(/1/)

});