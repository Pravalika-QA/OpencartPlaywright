
import { test, expect } from '@playwright/test'

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import {MyAccountPage } from '../pages/MyAccountpage';
import { TestConfig } from '../test.config';

let homepage: HomePage;
let login: LoginPage;
let myaccount: MyAccountPage;
let config: TestConfig;

test.beforeEach("before every tests executes this", async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appurl)  //Navigate to the application

    homepage = new HomePage(page)
    login = new LoginPage(page)
    myaccount= new MyAccountPage(page)

})

test.afterEach("after tests executes this", async ({ page }) => {
    await page.waitForTimeout(5000)
    await page.close();
})

test("user Login @master @sanity @regression" , async()=>{

    //navigate to login 
    await homepage.MyAccountLink()
    await homepage.ClickLogin()

    //Enter valid credentials
    await login.EnterEmail(config.email)
    await login.EnterPassword(config.password)
    await login.clickonLogin()

    //verify successful login by checking the 'My Account' page exists
    const isLoggedin= await myaccount.isMyAccountPageExists()
    expect(isLoggedin).toBeTruthy()

})