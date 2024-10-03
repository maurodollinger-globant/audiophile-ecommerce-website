# tests.cy.js Documentation

## Overview

This file contains automated end-to-end tests for navigating the audiophile e-commerce website. It uses Cypress for test automation.

### Disabling ESLint rule
- `/* eslint-disable no-undef */`: This directive disables the `no-undef` rule of ESLint for the entire file.

### Cypress reference
- `/// <reference types="cypress" />`: This directive provides type definitions for Cypress.

## Test Suite: testing navigation

### Description
The `testing navigation` test suite contains multiple test cases to validate the navigation functionality of the e-commerce website. It includes tests for navigating between pages, interacting with product sections, and handling main product details.

### Test Cases

#### 1. `should navigate between pages`
This test ensures that users can successfully navigate between different pages of the website.
- Visits the homepage (`/`).
- Clicks on the first item in the navigation menu.
- Clicks on the second item in the navigation menu.
- Clicks on the first item in the navigation menu.
- Clicks on the third item in the navigation menu.
- Clicks on the first item in the navigation menu.
- Clicks on the fourth item in the navigation menu.
- Clicks on the first link in the header's navigation to return to the homepage.

#### 2. `should scroll to products sections and click on them`
This test ensures that users can scroll to the product sections and click on the individual products.
- Visits the homepage (`/`).
- Scrolls to the products section.
- Clicks on the first product (using CSS class `.btnCatProduct:nth-child(1) > div`).
- Verifies that the page header text is 'headphones'.
- Navigates back to the homepage.
- Scrolls to the products section again.
- Clicks on the second product (using CSS class `.btnCatProduct:nth-child(2) > div`).
- Verifies that the page header text is 'speakers'.
- Navigates back to the homepage.
- Scrolls to the products section again.
- Clicks on the third product (using CSS class `.btnCatProduct:nth-child(3) > div`).
- Verifies that the page header text is 'earphones'.
- Navigates back to the homepage.

#### 3. `should scroll to main product and click on it`
This test ensures that users can scroll to the main product section and interact with it.
- Visits the homepage (`/`).
- Scrolls to the products section.
- Clicks on the button within the main product section (`div[data-cy="see-main-product"] button`).
- Verifies that the main product card header text is 'ZX9 Speaker'.
- Clicks on the 'Go Back' span to return to the previous page.