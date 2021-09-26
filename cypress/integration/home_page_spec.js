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
    cy.get('nav').find('li').contains('Favorites')
    cy.get('nav').find('li').contains('See All')
    cy.get('nav').find('img')
    // try to locate the src 👇
    cy.get('img[alt="old english D"]')
  })

  it('Should render two cards to the screen', () => {
    cy.get('article').should('have.length', 2)
  })

  it('Should show the correct information on the cards', () => {
    cy.get('article').find('h2').contains('Atwater Brewing Co')
    cy.get('article').find('h3').contains('Brewery Type: regional')
    cy.get('article').find('p').contains('237 Joseph Campau St')
    cy.get('article').find('p').contains('Detroit, Michigan')
    cy.get('article').find('p').contains('48207-4107')
    cy.get('article').find('h3').contains('3138779205')
    cy.get('article').find('a').contains('Website')
  })

  it.only('Should allow the user to favorite breweries and change the favorite-icon', () => {
    cy.get('article').find('img.favoriting-image.notFaved').click({ multiple: true })
    cy.get('article').find('img.faved').should('have.length', 2)
  })

  it('Should allow a user to unfavorite a brewery and change the favorite-icon back to original', () => {

  })
}); // end describe block
