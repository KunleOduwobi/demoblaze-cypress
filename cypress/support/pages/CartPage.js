class CartPage {
  
  assertProductInCart(productName) {
    cy.get('#tbodyid').should('be.visible').and('contain', productName);
  }

  clickPlaceOrder() {
    cy.contains('button', 'Place Order').click();
  }

  assertCartEmpty() {
    cy.contains('h2', 'Products').should('be.visible')
    cy.get('#tbodyid tr').should('have.length', 0);
  }
}

export default new CartPage();