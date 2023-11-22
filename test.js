const { Builder, By, Key, until } = require('selenium-webdriver');

async function testLibrarySearchSystem() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigation Test
    await driver.get('http://localhost:3000');
    await driver.getTitle().then(title => console.log(`Title: ${title}`));
    
    await TestCase1_SearchTitle(driver);
    await TestCase2_SearchAuthor(driver);
    await TestCase3_SearchISBN(driver);
    await TestCase4_SearchGenre(driver);
    await TestCase5_BookTable(driver);
    
    await TestCase6_EnterButton(driver);
    await navigate(driver);
    await TestCase7_SearchName(driver);
    await TestCase8_SearchEmail(driver);
    await TestCase9_ProfileTable(driver);
 

  } finally {
    await driver.quit();
  }
}

async function delay(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function TestCase1_SearchTitle(driver) {
  // Test the search input functionality
  const searchTerm = 'The Da Vinci Code';
  await driver.findElement(By.css('input[type="text"]')).sendKeys(searchTerm);
  
  // Test the search category dropdown
  const selectedCategory = 'title';
  await driver.findElement(By.css('select')).sendKeys(selectedCategory, Key.RETURN);
  

  try {
    const tableRows = await driver.wait(until.elementsLocated(By.className('book')), 5000);
  
    if (tableRows.length === 0) {
      console.log('No search results found.');
    } else {
      console.log(`TEST CASE 1 PASSED: Book Search Results for "${searchTerm}" in category "${selectedCategory}"`);
      await delay(5000);
      // Process the search results
    }
  } catch (error) {
    if (error.name === 'TimeoutError') {
      console.log('Timeout exceeded. No search results found.');
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }

  
}

async function TestCase2_SearchAuthor(driver) {
  // Test the search input functionality
  await driver.findElement(By.css('input[type="text"]')).clear();
  const searchTerm = 'J.K. Rowling';
  await driver.findElement(By.css('input[type="text"]')).sendKeys(searchTerm);

  // Test the search category dropdown
  const selectedCategory = 'author';
  await driver.findElement(By.css('select')).sendKeys(selectedCategory, Key.RETURN);

  try {
    const tableRows = await driver.wait(until.elementsLocated(By.className('book')), 12000);
  
    if (tableRows.length === 0) {
      console.log('No search results found.');
    } else {
      console.log(`TEST CASE 2 PASSED: Book Search Results for "${searchTerm}" in category "${selectedCategory}"`);
      // Process the search results
      await delay(5000);
    }
  } catch (error) {
    if (error.name === 'TimeoutError') {
      console.log('Timeout exceeded. No search results found.');
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }

  
}
async function TestCase3_SearchISBN(driver) {
  // Test the search input functionality
  await driver.findElement(By.css('input[type="text"]')).clear();
  const searchTerm = '9788888888888';
  await driver.findElement(By.css('input[type="text"]')).sendKeys(searchTerm);


  // Test the search category dropdown
  const selectedCategory = 'ISBN';
  await driver.findElement(By.css('select')).sendKeys(selectedCategory, Key.RETURN);

  try {
    const tableRows = await driver.wait(until.elementsLocated(By.className('book')), 20000);
  
    if (tableRows.length === 0) {
      console.log('No search results found.');
    } else {
      console.log(`TEST CASE 3 PASSED: Book Search Results for "${searchTerm}" in category "${selectedCategory}"`);
      await delay(5000);
      // Process the search results
    }
  } catch (error) {
    if (error.name === 'TimeoutError') {
      console.log('Timeout exceeded. No search results found.');
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }

}


async function TestCase4_SearchGenre(driver) {
  // Test the search input functionality
  await driver.findElement(By.css('input[type="text"]')).clear();
  const searchTerm = 'Action';
  await driver.findElement(By.css('input[type="text"]')).sendKeys(searchTerm);
  

  // Test the search category dropdown
  const selectedCategory = 'genre';
  await driver.findElement(By.css('select')).sendKeys(selectedCategory, Key.RETURN);
  

  try {
    const tableRows = await driver.wait(until.elementsLocated(By.className('book')), 27000);
  
    if (tableRows.length === 0) {
      console.log('No search results found.');
    } else {
      console.log(`TEST CASE 4 PASSED: Book Search Results for "${searchTerm}" in category "${selectedCategory}"`);
      
      await delay(5000);// Process the search results
    }
  } catch (error) {
    if (error.name === 'TimeoutError') {
      console.log('Timeout exceeded. No search results found.');
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }

}


async function TestCase5_BookTable(driver) {
  // Test the search input functionality
  await driver.findElement(By.css('input[type="text"]')).clear();
  const searchTerm = 'The Lost World';
  await driver.findElement(By.css('input[type="text"]')).sendKeys(searchTerm);

  // Test the search category dropdown
  const selectedCategory = 'title';
  await driver.findElement(By.css('select')).sendKeys(selectedCategory, Key.RETURN);

  try {
    const tableRows = await driver.wait(until.elementsLocated(By.className('book')), 35000);
  
    if (tableRows.length === 0) {
      console.log('No search results found.');
    } else {
      console.log(`TEST CASE 5 PASSED: Table found for "${searchTerm}"`);
      await delay(5000);
    }
  } catch (error) {
    if (error.name === 'TimeoutError') {
      console.log('Timeout exceeded. No search results found.');
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }

}

async function TestCase6_EnterButton(driver) {
  // Test the search input functionality
  
  try {
    await driver.wait(until.elementsLocated(By.id('searchbutton')), 42000);
  
    
    console.log(`TEST CASE 6 PASSED: Search Button Found`);
    await delay(5000);
      // Process the search results
    
  } catch (error) {
    if (error.name === 'TimeoutError') {
      console.log('Timeout exceeded. No search results found.');
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }

}



async function navigate(driver) {
// Test the search input functionality
await driver.findElement(By.css('input[type="text"]')).clear();
const searchTerm = 'Action';
await driver.findElement(By.css('input[type="text"]')).sendKeys(searchTerm);

// Test the search category dropdown
const selectedCategory = 'genre';
await driver.findElement(By.css('select')).sendKeys(selectedCategory, Key.SHIFT);
await delay(2000)
}


async function TestCase7_SearchName(driver) {
  
// Test the search input functionality
await driver.findElement(By.css('input[type="text"]')).clear();
const searchTerm = 'Robert Johnson';
await driver.findElement(By.css('input[type="text"]')).sendKeys(searchTerm);


// Test the search category dropdown
const selectedCategory = 'name';
await driver.findElement(By.css('select')).sendKeys(selectedCategory, Key.RETURN);


try {
  const tableRows = await driver.wait(until.elementsLocated(By.className('profile')), 48000);

  if (tableRows.length === 0) {
    console.log('No search results found.');
  } else {
    console.log(`TEST CASE 7 PASSED: Profile Search Results for "${searchTerm}" in category "${selectedCategory}"`);
    
    await delay(5000);// Process the search results
  }
} catch (error) {
  if (error.name === 'TimeoutError') {
    console.log('Timeout exceeded. No search results found.');
  } else {
    console.error('An unexpected error occurred:', error);
  }
}

}

async function TestCase8_SearchEmail(driver) {

// Test the search input functionality
await driver.findElement(By.css('input[type="text"]')).clear();
const searchTerm = 'michaelanderson@email.com';
await driver.findElement(By.css('input[type="text"]')).sendKeys(searchTerm);


// Test the search category dropdown
const selectedCategory = 'email';
await driver.findElement(By.css('select')).sendKeys(selectedCategory, Key.RETURN);


try {
  const tableRows = await driver.wait(until.elementsLocated(By.className('profile')), 58000);

  if (tableRows.length === 0) {
    console.log('No search results found.');
  } else {
    console.log(`TEST CASE 8 PASSED: Profile Search Results for "${searchTerm}" in category "${selectedCategory}"`);
    
    await delay(5000);// Process the search results
  }
} catch (error) {
  if (error.name === 'TimeoutError') {
    console.log('Timeout exceeded. No search results found.');
  } else {
    console.error('An unexpected error occurred:', error);
  }
}

}

async function TestCase9_ProfileTable(driver) {
  
await driver.findElement(By.css('input[type="text"]')).clear();
const searchTerm = 'Sophia Miller';
await driver.findElement(By.css('input[type="text"]')).sendKeys(searchTerm);


// Test the search category dropdown
const selectedCategory = 'name';
await driver.findElement(By.css('select')).sendKeys(selectedCategory, Key.RETURN);


try {
  const tableRows = await driver.wait(until.elementsLocated(By.className('profile')), 65000);

  if (tableRows.length === 0) {
    console.log(`TEST CASE 9 FAILED. No search results found for "${searchTerm}"`);
  } else {
    console.log(`TEST CASE 9 PASSED: Table found for "${searchTerm}"`);
    await delay(5000)
  }
} catch (error) {
  if (error.name === 'TimeoutError') {
    console.log('Timeout exceeded. No search results found.');
  } else {
    console.error('An unexpected error occurred:', error);
  }
}


}

testLibrarySearchSystem();
