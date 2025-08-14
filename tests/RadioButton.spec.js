// @ts-check
import {test, expect} from "@playwright/test";

test("Handling Radio Button",async({page}) =>{

await page.goto("https://demoqa.com/automation-practice-form");

//1.Yol
await page.locator('label[for="gender-radio-1"]').click();

//2.yol
await page.locator('label[for="gender-radio-2"]').check();

await page.waitForTimeout(2000);



})

