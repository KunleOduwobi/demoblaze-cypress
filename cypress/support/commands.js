Cypress.Commands.add('acceptAlert', (expectedText) => {
  cy.on('window:alert', (text) => {
    expect(text).to.contain(expectedText);
  });
});

