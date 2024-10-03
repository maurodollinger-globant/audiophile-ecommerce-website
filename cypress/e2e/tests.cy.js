/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('testing navigation', () => {
  
  
  it('should navigate between pages', () => {
    cy.visit('/');

    cy.get('header nav ul li a').first().click();
    cy.get('header nav ul li a').eq(1).click();
    cy.get('header nav ul li a').first().click();
    cy.get('header nav ul li a').eq(2).click();
    cy.get('header nav ul li a').first().click();
    cy.get('header nav ul li a').eq(3).click();
    cy.get('header nav a').first().click();
  });

  it('should scroll to products sections and click on them', () => {
    cy.visit('/');

    cy.get('section[data-cy="products"]').scrollIntoView();    
    cy.get('.btnCatProduct:nth-child(1) > div').click();
    cy.get('.container > h2').should('have.text', 'headphones');
    cy.get('header nav a').first().click();

    cy.get('section[data-cy="products"]').scrollIntoView();
    cy.get('.btnCatProduct:nth-child(2) > div').click();
    cy.get('.container > h2').should('have.text', 'speakers');
    cy.get('header nav a').first().click();

    cy.get('section[data-cy="products"]').scrollIntoView();
    cy.get('.btnCatProduct:nth-child(3) > div').click();
    cy.get('.container > h2').should('have.text', 'earphones');
    cy.get('header nav a').first().click();
  });

  it('should scroll to main product and click on it', () => {
    cy.visit('/');
    cy.get('section[data-cy="products"]').scrollIntoView();

    cy.get('div[data-cy="see-main-product"] button').click();
    cy.get('section[data-cy="product-card"] h3').should('have.text', 'ZX9 Speaker');
    cy.get('.container > span').contains('Go Back').click();
  });

});