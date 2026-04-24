import HomePage from '../../support/pages/HomePage';
import LoginModal from '../../support/pages/LoginModal';

describe('Login', { tags: ['@login', '@auth', '@smoke'] }, () => {
  beforeEach(() => {
    HomePage.visit();
    cy.fixture('users').as('users');
  });

  it('logs in successfully with valid credentials', function () {
    HomePage.clickLogin();
    LoginModal.login(this.users.validUser.username, this.users.validUser.password);

    HomePage.assertLoggedIn(this.users.validUser.username);
  });

  it('shows an alert for invalid credentials', { tags: ['@negative']}, function () {
    cy.acceptAlert('Wrong password.');
    HomePage.clickLogin();
    LoginModal.login(this.users.invalidUser.username, this.users.invalidUser.password);
  });

  it('shows an alert when username and password are empty', { tags: ['@negative'] }, function () {
    cy.acceptAlert('Please fill out Username and Password.');
    HomePage.clickLogin();
    LoginModal.submit();
  });
});