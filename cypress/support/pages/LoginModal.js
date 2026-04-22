class LoginModal {
  enterUsername(username) {
    cy.get('#loginusername').should('be.visible').clear().type(username);
  }

  enterPassword(password) {
    cy.get('#loginpassword').should('be.visible').clear().type(password, { log: false });
  }

  submit() {
    cy.get('#logInModal').contains('button', 'Log in').click();
  }

  login(username, password) {
    cy.get('#logInModal').should('be.visible');
    this.enterUsername(username);
    this.enterPassword(password);
    this.submit();
  }
}

export default new LoginModal();