import HomePage from '../../support/pages/HomePage';
import ProductPage from '../../support/pages/ProductPage';
import CartPage from '../../support/pages/CartPage';
import PlaceOrderModal from '../../support/pages/PlaceOrderModal';

describe('Place order UI', () => {
  beforeEach(() => {
    cy.fixture('order').as('order');
  });

  it('places an order successfully', function () {
    HomePage.visit();
    HomePage.openProduct('Samsung galaxy s6');

    cy.acceptAlert('Product added');
    ProductPage.addToCart();

    HomePage.clickCart();
    CartPage.assertProductInCart('Samsung galaxy s6');
    CartPage.clickPlaceOrder();

    PlaceOrderModal.fillOrderForm(this.order);
    PlaceOrderModal.purchase();
    PlaceOrderModal.assertSuccess();
    PlaceOrderModal.confirmSuccess();
  });
});