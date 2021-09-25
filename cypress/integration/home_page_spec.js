beforeEach(() => {
  cy.intercept('GET', 'https://api.openbrewerydb.org/breweries?by_city=detroit', { fixture: 'breweries' }).as('breweries')
  cy.visit('http://localhost:3000/')
})

describe('Home page features and functionality', () => {

  it('Should confirm true to be true', () => {
    expect(true).to.equal(true)
  });
}); // end describe block
