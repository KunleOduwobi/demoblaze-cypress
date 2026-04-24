import './commands';

Cypress.on('uncaught:exception', (err) => {
  return false;
});

const { register: registerCypressGrep } = require('@cypress/grep');
registerCypressGrep();