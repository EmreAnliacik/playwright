// @ts-check

import {test, expect} from '@playwright/test';

test('OrangeHRM XPATHCSS', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/');

    // await page.getByPlaceholder("Username").fill("Admin");
    await page.locator("//input[@placeholder='Username']").fill("Admin");
    // await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("input[type='password']").fill("admin123");

    await page.waitForTimeout(2000);

})
