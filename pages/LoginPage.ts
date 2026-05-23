
import{Page, expect, Locator} from '@playwright/test'

export class LoginPage
{
    private readonly page: Page;

    private readonly EmailInput:Locator;
    private readonly PasswordInput:Locator;
    private readonly loginbtn:Locator;
    private readonly Errormessagetxt:Locator;

    constructor(page:Page)
    {
        this.page= page
        this.EmailInput= page.locator("#input-email")
        this.PasswordInput= page.locator("#input-password")
        this.loginbtn= page.locator("input[value='Login']")
        this.Errormessagetxt= page.locator(".alert.alert-danger.alert-dismissible")
    }

    async EnterEmail(email:string)
    {
        await this.EmailInput.fill(email)

    }
    async EnterPassword(password:string)
    {
        await this.PasswordInput.fill(password)
    }
    async clickonLogin()
    {
        await this.loginbtn.click()
    }

    /**
     * Performs complete login action
     * @param email - Email address to enter
     * @param password - Password to enter
     */
    async login(email: string, password: string){
        await this.EnterEmail(email);
        await this.EnterPassword(password);
        await this.clickonLogin();
    }

    async ErrorMessage()
    {
        return (await this.Errormessagetxt.textContent())
    }
}