const { Builder, By } = require('selenium-webdriver');
async function exampleTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://moodle.apsit.org.in/moodle/login/index.php');
    await driver.findElement(By.name('username')).sendKeys('21104043');
    await driver.findElement(By.name('password')).sendKeys('21104042@Apsit');
    await driver.findElement(By.id('loginbtn')).click();
  } catch (err) {
    console.error(err);
  } finally {
    // await driver.quit();
  }
}
exampleTest();
