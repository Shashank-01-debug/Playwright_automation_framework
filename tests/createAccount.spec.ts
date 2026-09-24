import { test, expect } from '@playwright/test';

test('create account Test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('#email_create').click();
  await page.locator('#email_create').fill('jatin21@yahoo.com');
  await page.getByRole('button', { name: 'Create an account' }).click();
  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).click();
  await page.getByRole('textbox', { name: 'First name *' }).fill('jatin');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('jaipur');
  await page.getByRole('textbox', { name: 'Password *' }).fill('12345');
  await page.locator('#days').selectOption('17');
  await page.locator('#months').selectOption('7');
  await page.locator('#years').selectOption('2008');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('Your account has been created.')).toBeVisible();
});