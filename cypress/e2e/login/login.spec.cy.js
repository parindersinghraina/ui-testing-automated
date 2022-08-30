import { forEach } from '../../fixtures/login.json';
import loginPage from '../../pages/loginPage';

const testData = require(`../../fixtures/login.json`);

describe('Swag Labs Login Test With Different Users', function() {

  beforeEach(function() {
    cy.visit('https://www.saucedemo.com/')
  });

  testData.forEach(test => {

    it(test.name, function() {

      // Login to Swag Labs
      loginPage.waitForPageLoad();
      loginPage.enterUserName(test.username);
      loginPage.enterPassword(test.password);
      loginPage.clickLoginButton();

      // Assert
      const errorMessage = loginPage.getErrorMessage();
      cy.get('[data-test="error"]').should('contain.text', test.expected);
    });

  });
  
})