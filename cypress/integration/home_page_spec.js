beforeEach(() => {
  cy.intercept('GET', 'https://api.openbrewerydb.org/breweries?by_city=detroit', { fixture: 'breweries' }).as('breweries')
  cy.visit('http://localhost:3000/home')
})

describe('Home page features and functionality', () => {

  it('Should confirm true to be true', () => {
    expect(true).to.equal(true)
  });

  it('Should visit the correct url', () => {
    cy.url().should('include', '/home')
  })

  it('Should render a navbar with the corresponding elements', () => {

  })

  it('Should render two cards to the screen', () => {
    cy.get('article').should('have.length', 2)
  })

  it('Should show the correct information on the cards', () => {

  })

  it('Should allow the user to favorite breweries and change the favorite-icon', () => {

  })

  it('Should allow a user to unfavorite a brewery and change the favorite-icon back to original', () => {

  })
}); // end describe block
