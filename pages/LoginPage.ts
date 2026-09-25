import {Page,Locator} from '@playwright/test'
import { MyAccountPage } from './MyAccountPage'


export class LoginPage{
    page:Page
    signInLinkLocator : Locator
    emailTextBoxLocator: Locator
    passwordTextBoxLocator : Locator
    singInButtonLocator: Locator

    constructor(page:Page){
        this.page=page;
         this.signInLinkLocator = page.getByRole('link', { name: 'Sign in' });
         this.emailTextBoxLocator = page.locator('#email');
         this.passwordTextBoxLocator =  page.getByRole('textbox', { name: 'Password' });
        this.singInButtonLocator = page.getByRole('button', { name: ' Sign in' });
                 

    }

    async goto(){
       await this.page.goto('/')
    }

  async doLoginWith(emailAddress:string,password:string):Promise<MyAccountPage>{

     await this.signInLinkLocator.click();
     await this.emailTextBoxLocator.fill(emailAddress);
     await this.passwordTextBoxLocator.fill(password);
     await this.singInButtonLocator.click();
     const myAccountPage = new MyAccountPage(this.page);
     return myAccountPage;
    
    }
}