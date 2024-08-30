import { test, expect } from '@playwright/test';

async function findIncompleteSubtaskLocator(page) {
  const column2 = page.locator('section').nth(1);  
  let x = 0;

  while (true) {
      
      const pTextContent = await column2.locator('article').nth(x).locator('p').textContent();

      if (pTextContent) {
          const match = pTextContent.match(/(\d+) of (\d+)/);

          if (match) {
              const current = parseInt(match[1], 10);
              const total = parseInt(match[2], 10);

              if (current < total) {
                  return {
                      column2Locator: column2,
                      incompleteSubtaskLocator: column2.locator('article').nth(x)
                  };
              }
          }
      }

      x++; 
      if (x >= 10) {
          console.log('Reached the maximum number of subtasks to check.');
          return {
              column2Locator: column2,
              incompleteSubtaskLocator: null
          }; 
      }
  }
}

test('test', async ({ page }) => {
  await page.goto('https://kanban-566d8.firebaseapp.com/');

  const { column2Locator, incompleteSubtaskLocator } = await findIncompleteSubtaskLocator(page);

  if (incompleteSubtaskLocator) {
      
      await incompleteSubtaskLocator.click();

      
      ;
     

 
      const check = page.locator('div.bg-white.border').nth(0);



      
      await check.click(); 
      const dropdown = page.locator('div[tabindex="1"]').nth(2);

      
      await expect(dropdown).toBeVisible();
    
      
      await dropdown.click();
     await page.locator('div.p-4.text-medium-grey.hover\\:text-black.dark\\:hover\\:text-white').nth(0).click();
      await page.locator('body').click();

  } else {
      console.log('No incomplete subtasks found.');
  }
});
