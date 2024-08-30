import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kanban-566d8.firebaseapp.com/task1725013758771task1725013974694task1725014108996task1725014192732task1725014280891task1725014400484task1725014432263task1725014900501task1725014901982task1725014902768task1725014972128task1725014975279');
  await page.locator('label').click();
  await expect(page.locator('html')).toHaveAttribute('class', 'dark')
  });

;