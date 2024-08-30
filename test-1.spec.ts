import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kanban-566d8.firebaseapp.com/task1725013758771task1725013974694task1725014108996task1725014192732task1725014280891task1725014400484task1725014432263task1725014900501task1725014901982task1725014902768task1725014972128task1725014975279task1725034483087task1725034492585task1725034536294task1725034558778task1725035611007task1725035613463task1725035613782task1725036187446task1725039957328task1725040056125task1725042007683task1725042009185task1725045062032');
  const purge = page.locator('section').locator('article').nth(0).textContent();
  await page.locator('section').locator('article').nth(0).click();
  await page.locator('circle').nth(4).click();
  await page.getByText('Delete Task').click();
  await page.getByRole('button', { name: 'Delete' }).click();
  console.log('Extracted Text:', purge);
   expect('html').not.toContain('Extracted Text:');
});