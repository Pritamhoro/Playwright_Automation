const {test,expect,Page }= require('@playwright/test')
test.use({viewport : {width:1521,height:782}})

test('TextValidation', async({ page })=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder('Username').fill("Username")
    await page.getByPlaceholder('Password').fill("Password")
    await page.locator('[type="submit"]').click()
    const errorMessage=await page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]').textContent();
    expect(errorMessage==='Invalid credentials').toBeTruthy()
    console.log(errorMessage)
    await page.close()

})
