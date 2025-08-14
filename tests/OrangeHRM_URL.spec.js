// @ts-check

import { test, expect } from '@playwright/test';
test('Validate OrangeHRM Website title', async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page).toHaveURL(/.*orangehrm/);
})
