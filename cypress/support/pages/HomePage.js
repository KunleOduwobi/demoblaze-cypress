class HomePage {
  visit() {
    cy.visit('/');
  }

  clickLogin() {
    cy.contains('#login2', 'Log in').click();
  }


  clickCart() {
    cy.contains('#cartur', 'Cart').click();
  }

  openProduct(productName) {
    cy.contains('.hrefch', productName).click();
  }

  assertLoggedIn(username) {
    cy.get('#nameofuser').should('contain', `Welcome ${username}`);
  }
}

export default new HomePage();