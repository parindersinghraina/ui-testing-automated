class loginPage {

    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButtton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }

    waitForPageLoad() {
        cy.title().should('Swag Labs');
    }

    enterUserName(username) {
        this.elements.usernameInput().type(username);
    }

    enterPassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLoginButton() {
        this.elements.loginButtton().click();
    }

}

export default new loginPage();