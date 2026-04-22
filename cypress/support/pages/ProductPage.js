class ProductPage {
  assertProductTitle(productName) {
    cy.get('.name').should('be.visible').and('contain', productName);
  }

  addToCart() {
    cy.contains('a', 'Add to cart').click();
  }
}

export default new ProductPage();