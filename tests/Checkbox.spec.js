// @ts-check
import {test, expect} from "@playwright/test";

test("Handling Checkboxes",async({page}) =>{

    await page.goto("https://demoqa.com/automation-practice-form");

//1.Yol
    await page.locator('label[for="hobbies-checkbox-1"]').click();

//2.yol
    await page.locator('label[for="hobbies-checkbox-2"]').check();

//Uncheck yapmak icin
    await page.locator('label[for="hobbies-checkbox-2"]').uncheck();

    await page.waitForTimeout(2000);



})

