
import { test, expect } from '@playwright/test'

import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';

let homepage: HomePage;
let registration: RegistrationPage;
let config: TestConfig;

test.beforeEach("before every tests executes this", async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appurl)  //Navigate to the application

    homepage = new HomePage(page)
    registration = new RegistrationPage(page)

})

test.afterEach("after tests executes this", async ({ page }) => {
    await page.waitForTimeout(5000)
    await page.close();
})

test('User Registration @master @sanity @regression', async ({ page }) => {
    //My Account click on Register
    await homepage.MyAccountLink()
    await homepage.ClickRegister()

    //Fill in registration information with random data
    await registration.setFirstName(RandomDataUtil.getFirstName())
    await registration.setLastName(RandomDataUtil.getlastName())
    await registration.setEmail(RandomDataUtil.getEmail())
    await registration.setTelephone(RandomDataUtil.getPhoneNumber())

    const password = RandomDataUtil.getPassword()
    await registration.setPassword(password)
    await registration.setConfirmPassword(password)

    await registration.setPrivacyPolicy()
    await registration.clickContinue()

    //validate the confirmation message
    const confirmationmsg = await registration.getConfirmationMsg()
    expect(confirmationmsg).toContain("Your Account Has Been Created!")




})


