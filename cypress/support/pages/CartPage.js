class CartPage {
  
  assertProductInCart(productName) {
    cy.get('#tbodyid').should('contain', productName);
  }

  clickPlaceOrder() {
    cy.contains('button', 'Place Order').click();
  }

  assertCartEmpty() {
    cy.get('#tbodyid tr').should('have.length', 0);
  }
}

export default new CartPage();