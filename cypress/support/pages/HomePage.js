class HomePage {
  visit() {
    cy.visit('/');
  }

  assertCategoriesIsVisible() {
    cy.get('#cat').should('be.visible').contains('CATEGORIES');
  }

  clickLogin() {
    cy.contains('#login2', 'Log in').should('be.visible').click();
  }


  clickCart() {
    cy.contains('#cartur', 'Cart').should('be.visible').click();
  }

  openProduct(productName) {
    cy.contains('.hrefch', productName).should('be.visible').click();
  }

  assertLoggedIn(username) {
    cy.get('#nameofuser').should('contain', `Welcome ${username}`);
  }
}

export default new HomePage();