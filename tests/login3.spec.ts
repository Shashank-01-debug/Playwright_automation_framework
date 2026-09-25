import { test, expect } from '@playwright/test';
import { getUserData } from '../data/user.data';
import { LoginPage } from '../pages/LoginPage';


test('login test', async ({ page }) => {
const userData = getUserData();
const loginPage = new LoginPage(page);
await loginPage.goto();
const MyAccountPage=await loginPage.doLoginWith(userData.emailAddress,userData.password);
await expect(MyAccountPage.userAccountLocator).toBeVisible();
});
