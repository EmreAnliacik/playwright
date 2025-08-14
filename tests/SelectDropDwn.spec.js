// @ts-check
import {test, expect} from "@playwright/test";

test("Selecting Dropdown",async({page}) =>{

    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator('input[id="login-button"]').click();
    await page.locator('select[class="product_sort_container"]').selectOption("za");
    await page.locator('select[class="product_sort_container"]').selectOption({index: 2});
    await page.locator('select[class="product_sort_container"]').selectOption({label: "Price (high to low)"});


    await page.waitForTimeout(1000);





})

