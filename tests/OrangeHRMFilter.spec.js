import {test, expect} from "@playwright/test";

test("Filtering Locators", async({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole('button', {name:'Login'}).click();

    //Filter by text
    await page.getByRole('listitem').filter({hasText:'Leave'}).click();
    await page.waitForTimeout(2000);






})