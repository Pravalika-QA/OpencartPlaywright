# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> execute end-to-end test flow @end-to-end
- Location: tests\EndToEndTest.spec.ts:30:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#input-firstname')

```

# Test source

```ts
  1   | 
  2   | 
  3   | import { Page, Locator, expect } from '@playwright/test';
  4   | 
  5   | export class RegistrationPage {
  6   |     private readonly page: Page;
  7   |     
  8   |     // Locators using CSS selectors
  9   |     private readonly txtFirstname: Locator;
  10  |     private readonly txtLastname: Locator;
  11  |     private readonly txtEmail: Locator;
  12  |     private readonly txtTelephone: Locator;
  13  |     private readonly txtPassword: Locator;
  14  |     private readonly txtConfirmPassword: Locator;
  15  |     private readonly chkdPolicy: Locator;
  16  |     private readonly btnContinue: Locator;
  17  |     private readonly msgConfirmation: Locator;
  18  | 
  19  |     constructor(page: Page) {
  20  |         this.page = page;
  21  |         
  22  |         // Initialize locators with CSS selectors
  23  |         this.txtFirstname = page.locator('#input-firstname');
  24  |         this.txtLastname = page.locator('#input-lastname');
  25  |         this.txtEmail = page.locator('#input-email');
  26  |         this.txtTelephone = page.locator('#input-telephone');
  27  |         this.txtPassword = page.locator('#input-password');
  28  |         this.txtConfirmPassword = page.locator('#input-confirm');
  29  |         this.chkdPolicy = page.locator('input[name="agree"]');
  30  |         this.btnContinue = page.locator('input[value="Continue"]');
  31  |         this.msgConfirmation = page.locator('h1:has-text("Your Account Has Been Created!")');
  32  |     }
  33  | 
  34  |     /**
  35  |      * Sets the first name in the registration form
  36  |      * @param fname - First name to enter
  37  |      */
  38  |     async setFirstName(fname: string): Promise<void> {
> 39  |         await this.txtFirstname.fill(fname);
      |                                 ^ Error: locator.fill: Target page, context or browser has been closed
  40  |     }
  41  | 
  42  |     /**
  43  |      * Sets the last name in the registration form
  44  |      * @param lname - Last name to enter
  45  |      */
  46  |     async setLastName(lname: string): Promise<void> {
  47  |         await this.txtLastname.fill(lname);
  48  |     }
  49  | 
  50  |     /**
  51  |      * Sets the email in the registration form
  52  |      * @param email - Email to enter
  53  |      */
  54  |     async setEmail(email: string): Promise<void> {
  55  |         await this.txtEmail.fill(email);
  56  |     }
  57  | 
  58  |     /**
  59  |      * Sets the telephone number in the registration form
  60  |      * @param tel - Telephone number to enter
  61  |      */
  62  |     async setTelephone(tel: string): Promise<void> {
  63  |         await this.txtTelephone.fill(tel);
  64  |     }
  65  | 
  66  |     /**
  67  |      * Sets the password in the registration form
  68  |      * @param pwd - Password to enter
  69  |      */
  70  |     async setPassword(pwd: string): Promise<void> {
  71  |         await this.txtPassword.fill(pwd);
  72  |     }
  73  | 
  74  |     /**
  75  |      * Sets the confirm password in the registration form
  76  |      * @param pwd - Password to confirm
  77  |      */
  78  |     async setConfirmPassword(pwd: string): Promise<void> {
  79  |         await this.txtConfirmPassword.fill(pwd);
  80  |     }
  81  | 
  82  |     /**
  83  |      * Checks the privacy policy checkbox
  84  |      */
  85  |     async setPrivacyPolicy(): Promise<void> {
  86  |         await this.chkdPolicy.check();
  87  |     }
  88  | 
  89  |     /**
  90  |      * Clicks the Continue button
  91  |      */
  92  |     async clickContinue(): Promise<void> {
  93  |         await this.btnContinue.click();
  94  |     }
  95  | 
  96  |     /**
  97  |      * Gets the confirmation message text
  98  |      * @returns Promise<string> - Confirmation message text
  99  |      */
  100 |     async getConfirmationMsg(): Promise<string> {
  101 |         return await this.msgConfirmation.textContent() ?? '';
  102 |     }
  103 | 
  104 |     /**
  105 |      * Complete registration workflow
  106 |      * @param userData - Object containing registration data
  107 |      */
  108 |     async completeRegistration(userData: {
  109 |         firstName: string;
  110 |         lastName: string;
  111 |         email: string;
  112 |         telephone: string;
  113 |         password: string;
  114 |     }): Promise<void> {
  115 |         await this.setFirstName(userData.firstName);
  116 |         await this.setLastName(userData.lastName);
  117 |         await this.setEmail(userData.email);
  118 |         await this.setTelephone(userData.telephone);
  119 |         await this.setPassword(userData.password);
  120 |         await this.setConfirmPassword(userData.password);
  121 |         await this.setPrivacyPolicy();
  122 |         await this.clickContinue();
  123 |         await expect(this.msgConfirmation).toBeVisible();
  124 |     }
  125 | }
  126 | 
```