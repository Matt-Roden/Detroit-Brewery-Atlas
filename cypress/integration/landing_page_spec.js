beforeEach(() => {
  cy.intercept('GET', 'https://api.openbrewerydb.org/breweries?by_city=detroit', { fixture: 'breweries' }).as('breweries')
  cy.visit('http://localhost:3000/')
})

describe('Landing page features and functionality', () => {

  it('Should be on the correct url', () => {
    cy.url().should('include', '/')
  });

  it('Should render a welcome message and a button', () => {
    cy.get('h1.welcome-message').contains('Welcome to Detroit - Now let\'s drink')
    cy.get('div.btn').find('span.btn-text').contains('enter')
  });

  it('Should be take the user to the home page when the enter button is clicked', () => {
    cy.get('div.btn').click()
    cy.url().should('include', '/home')
    cy.get('article').should('have.length', 2)
  });
}); //end describe block
