# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> execute end-to-end test flow @end-to-end
- Location: tests\EndToEndTest.spec.ts:30:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#input-firstname')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - heading "Qafox.com" [level=1] [ref=e33]:
        - link "Qafox.com" [ref=e34] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/account
      - listitem [ref=e72]:
        - link "Login" [ref=e73] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/login
    - generic [ref=e74]:
      - generic [ref=e76]:
        - generic [ref=e78]:
          - heading "New Customer" [level=2] [ref=e79]
          - paragraph [ref=e80]:
            - strong [ref=e81]: Register Account
          - paragraph [ref=e82]: By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
          - link "Continue" [ref=e83] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/register
        - generic [ref=e85]:
          - heading "Returning Customer" [level=2] [ref=e86]
          - paragraph [ref=e87]:
            - strong [ref=e88]: I am a returning customer
          - generic [ref=e89]:
            - generic [ref=e90]:
              - generic [ref=e91]: E-Mail Address
              - textbox "E-Mail Address" [ref=e92]
            - generic [ref=e93]:
              - generic [ref=e94]: Password
              - textbox "Password" [ref=e95]
              - link "Forgotten Password" [ref=e96] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/forgotten
            - button "Login" [ref=e97] [cursor=pointer]
      - complementary [ref=e98]:
        - generic [ref=e99]:
          - link "Login" [ref=e100] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/login
          - link "Register" [ref=e101] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/register
          - link "Forgotten Password" [ref=e102] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/forgotten
          - link "My Account" [ref=e103] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
          - link "Address Book" [ref=e104] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/address
          - link "Wish List" [ref=e105] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
          - link "Order History" [ref=e106] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/order
          - link "Downloads" [ref=e107] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/download
          - link "Recurring payments" [ref=e108] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/recurring
          - link "Reward Points" [ref=e109] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/reward
          - link "Returns" [ref=e110] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/return
          - link "Transactions" [ref=e111] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
          - link "Newsletter" [ref=e112] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
  - contentinfo [ref=e113]:
    - generic [ref=e114]:
      - generic [ref=e115]:
        - generic [ref=e116]:
          - heading "Information" [level=5] [ref=e117]
          - list [ref=e118]:
            - listitem [ref=e119]:
              - link "About Us" [ref=e120] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=e121]:
              - link "Delivery Information" [ref=e122] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=e123]:
              - link "Privacy Policy" [ref=e124] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=e125]:
              - link "Terms & Conditions" [ref=e126] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=e127]:
          - heading "Customer Service" [level=5] [ref=e128]
          - list [ref=e129]:
            - listitem [ref=e130]:
              - link "Contact Us" [ref=e131] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=e132]:
              - link "Returns" [ref=e133] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=e134]:
              - link "Site Map" [ref=e135] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=e136]:
          - heading "Extras" [level=5] [ref=e137]
          - list [ref=e138]:
            - listitem [ref=e139]:
              - link "Brands" [ref=e140] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=e141]:
              - link "Gift Certificates" [ref=e142] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=e143]:
              - link "Affiliate" [ref=e144] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=e145]:
              - link "Specials" [ref=e146] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=e147]:
          - heading "My Account" [level=5] [ref=e148]
          - list [ref=e149]:
            - listitem [ref=e150]:
              - link "My Account" [ref=e151] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e152]:
              - link "Order History" [ref=e153] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e154]:
              - link "Wish List" [ref=e155] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=e156]:
              - link "Newsletter" [ref=e157] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=e158]
      - paragraph [ref=e159]:
        - text: Powered By
        - link "OpenCart" [ref=e160] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
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
      |                                 ^ Error: locator.fill: Test timeout of 30000ms exceeded.
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