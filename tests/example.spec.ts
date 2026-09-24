import{test,expect} from '@playwright/test';

test('has title',async({page})=>{

    await page.goto('https://automationpractice.techwithjatin.com/');
    await expect(page).toHaveTitle(/Automation Practice/);
})
