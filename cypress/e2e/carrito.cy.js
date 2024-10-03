/* eslint-disable no-undef */

/// <reference types="cypress" />

describe('carrito', () => {

  function checkoutItems(){
    let productOne;

    cy.addItemToCart('headphones', '[data-cy="product-card"]').then((productName) => {
      productOne = productName;

      cy.addItemToCart('speakers', '[data-cy="product-card"]').then((productName) => {
        cy.get('[data-cy="cart-button"]').click();
        cy.get('[data-cy="cart-modal"]')
          .contains(productName)
          .should('be.visible');
        cy.get('[data-cy="cart-modal"]')
          .contains(productOne)
          .should('be.visible');
        cy.get('[data-cy="order-list-total"] button').click();
      });
    });
  }

  it('should add item to cart and remove it', () => {
    cy.addItemToCart('headphones', '[data-cy="product-card"]').then((productName) => {
      cy.get('[data-cy="cart-button"]').click();
      cy.get('[data-cy="cart-modal"]').should('be.visible');
      cy.get('[data-cy="cart-modal"]')
        .contains(productName)
        .should('be.visible');
      cy.get('[data-cy="cart-remove-all"]').click();
      cy.get('[data-cy="cart-modal"]').should('not.exist');
    });
  });


  it('should add two items and proceed to checkout', () => {
    checkoutItems();
  });

  it('should validate input fields as invalid if there are empty',()=>{
    checkoutItems();
    cy.get('[data-cy="order-list-total"] button:eq(1)').click();
    cy.get('[data-cy="order-list-total"] button:eq(1)').should('be.disabled');
  });

  it('should validate input fields as valid if there are filled and finish payment',()=>{
    checkoutItems();
    cy.get('input[name="name"]').type('Mauro');
    cy.get('input[name="phone"]').type('1234567890');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="address"]').type('test address');
    cy.get('input[name="zipcode"]').type('123456');
    cy.get('input[name="country"]').type('Argentina');
    cy.get('input[name="city"]').type('Buenos Aires');
    cy.get('input[name="emoneynumber"]').type('1234567890');
    cy.get('input[name="emoneypin"]').type('1234');
    cy.get('[data-cy="order-list-total"] button:eq(0)').click();
    cy.get('[data-cy="order-complete-modal"]').should('be.visible');
    cy.get('[data-cy="order-complete-modal"] button').click();
  });


});