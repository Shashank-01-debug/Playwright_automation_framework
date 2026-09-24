import { test, expect } from '@playwright/test';
import { createFakeCustomerData } from '../data/customerInfo.data';

test('create account Test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('#email_create').click();
  await page.locator('#email_create').fill(createFakeCustomerData().emailAddress);
  await page.getByRole('button', { name: 'Create an account' }).click();
  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).click();
  await page.getByRole('textbox', { name: 'First name *' }).fill(createFakeCustomerData().firstName);
  await page.getByRole('textbox', { name: 'Last name *' }).fill(createFakeCustomerData().lastName);
  await page.getByRole('textbox', { name: 'Password *' }).fill(createFakeCustomerData().password);
  await page.locator('#days').selectOption(createFakeCustomerData().date);
  await page.locator('#months').selectOption(createFakeCustomerData().month);
  await page.locator('#years').selectOption(createFakeCustomerData().year);
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('Your account has been created.')).toBeVisible();
});