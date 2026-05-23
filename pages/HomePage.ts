
import{Page, expect, Locator} from '@playwright/test'

export class HomePage
{
    private readonly page:Page

    //Locators

    private readonly linkmyaccount:Locator;
    private readonly linkregister:Locator;
    private readonly linkLogin:Locator;
    private readonly textsearchbox:Locator;
    private readonly searchbtn:Locator;

    //constructors
    constructor(page:Page)
    {
        this.page= page;
        this.linkmyaccount= page.locator("a[title='My Account']");
        this.linkregister= page.locator("ul li a:has-text('Register')");
        this.linkLogin= page.locator("ul li a:has-text('Login')");
        this.textsearchbox= page.locator("input[name='search']");
        this.searchbtn= page.locator("#search button[type='button']");
    }
    //action methods

    //check home page exists
    async ishomepageexists()
    {
      let title= await this.page.title();
      if(title)
      {
        return true;
      }
      return false
    }

    //click My Account link

    async MyAccountLink()
    {   
        try{
             await this.linkmyaccount.click()
        }
        catch(error){
            console.log(`Exception occured while clicking on 'My Account Link:', ${error}`);
            throw error;
        }   
    }

     //click Register link

    async ClickRegister()
    {   
        try{
             await this.linkregister.click()
        }
        catch(error){
            console.log(`Exception occured while clicking on 'My Account Link:', ${error}`);
            throw error;
        }   
    }

         //click Login link

    async ClickLogin()
    {   
        try{
             await this.linkLogin.click()
        }
        catch(error){
            console.log(`Exception occured while clicking on 'My Account Link:', ${error}`);
            throw error;
        }   
    }

      //Enter the product in the search box

    async searchbox(product:string)
    {   
        try{
             await this.textsearchbox.fill(product)
        }
        catch(error){
            console.log(`Exception occured while clicking on 'My Account Link:', ${error}`);
            throw error;
        }   
    }

   //click on search button

    async searchbutton()
    {   
        try{
             await this.searchbtn.click()
        }
        catch(error){
            console.log(`Exception occured while clicking on 'My Account Link:', ${error}`);
            throw error;
        }   
    }
}