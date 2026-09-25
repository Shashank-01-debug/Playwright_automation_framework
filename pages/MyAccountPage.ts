import {Page,Locator} from '@playwright/test'

export class MyAccountPage{
 readonly   page:Page
readonly userAccountLocator:Locator

    constructor(page:Page){
        this.page=page;
        this.userAccountLocator = page.getByRole('link',{name:'Jatin Shharma'});
    }

 async isAccountLinkVisible():Promise<Boolean>{
return await  this.userAccountLocator.isVisible();
    }
}
