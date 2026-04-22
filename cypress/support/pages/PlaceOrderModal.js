class PlaceOrderModal {
  fillOrderForm(order) {
    cy.get('#orderModal').should('be.visible');
    cy.get('#name').clear().type(order.name);
    cy.get('#country').clear().type(order.country);
    cy.get('#city').clear().type(order.city);
    cy.get('#card').clear().type(order.card);
    cy.get('#month').clear().type(order.month);
    cy.get('#year').clear().type(order.year);
  }

  purchase() {
    cy.get('#orderModal').contains('button', 'Purchase').click();
  }

  assertSuccess() {
    cy.contains('Thank you for your purchase!').should('be.visible');
  }

  confirmSuccess() {
    cy.contains('button', 'OK').click();
  }
}

export default new PlaceOrderModal();