/* eslint-disable indent */
/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addItemToCart',(category, productCardSelector)=>{
    cy.visit(`/#category/${category}`);
    return cy.get(`${productCardSelector}:first h3`)
      .invoke('text')
      .then((productName)=>{
        cy.get(`${productCardSelector}:first button`).click();
        cy.get(`${productCardSelector} button`)
          .contains('Add to cart')
          .click();
        return cy.wrap(productName);
      });
});