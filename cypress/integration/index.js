/// <reference types="Cypress" />

/* global cy */
describe('Express Create React App', () => {
  it('Renders app', function () {
    cy.visit('http://localhost:3000')
    cy.get('.express-header')
      .should('contain', 'Custom Header from Express');
    cy.get('.App-link').should('be.visible')
      .and('have.text', 'Learn React')
    cy.get('.App-header > :nth-child(4)')
      .should('contain', '{"text":"pong"}');
    cy.get('.App-header > :nth-child(5)')
      .should('contain', '{"bootstrap":"data"}');
    cy.get('.express-footer')
      .should('contain', 'Custom Footer from Express');
  })
})