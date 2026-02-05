const {test,expect}=require('@playwright/test')
test('First Test in Playwright', async({page})=>
{
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await page.locator("[value='radio3']").click();
  await page.locator("#name").fill("Pritam");
  await page.locator("#checkBoxOption3").click();
  await page.close();
});
