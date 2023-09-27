const { Builder, By } = require('selenium-webdriver');
const MongoClient = require('mongodb').MongoClient;

async function exampleTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://moodle.apsit.org.in/moodle/login/index.php');
    await driver.findElement(By.name('username')).sendKeys('21104023');
    await driver.findElement(By.name('password')).sendKeys('21104023@Apsit');
    await driver.findElement(By.id('loginbtn')).click();
    // Wait for the login to complete (you may need to customize this)
    await driver.sleep(5000); // Wait for 5 seconds 

    // Check if the login was successfully
    if (await driver.getCurrentUrl() === 'http://moodle.apsit.org.in/moodle/') {
      // MongoDB connection URL
      const mongoURL = 'mongodb://localhost:27017'; // Replace with your MongoDB URL

      // Create a MongoDB client
      const client = new MongoClient(mongoURL);

      // Connect to MongoDB
      await client.connect();

      // MongoDB database and collection name
      const dbName = 'test';
      const collectionName = 'tests';

      // User data to save
      const userData = {
        username: '21104023', // Replace with the actual username
        // Add other user data as needed
      };

      // Insert the user data into MongoDB
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      await collection.insertOne(userData);

      // Close the MongoDB client
      await client.close();
    }
  } catch (err) {
    console.error(err);
  } finally {
    // await driver.quit();
  }
}

exampleTest();
