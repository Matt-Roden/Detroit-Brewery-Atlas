beforeEach(() => {
  cy.intercept('GET', 'https://api.openbrewerydb.org/breweries?by_city=detroit', { fixture: 'breweries' }).as('breweries')
  cy.visit('http://localhost:3000/home')
})

describe(' User flow and functionality for Favorites page', () => {

  it('Should change the url when clicking on the Favorites nav link in the header', () => {
    cy.get('nav').find('li').contains('Favorites')
  })

  it('Should show the corresponding brewery cards on the favorites page after favoriting', () => {

  })

  it('Should show the correct elements on the favorites page when visiting', () => {

  })

  it('Should not show the cards anymore after unfavorting them from the favorites page', () => {

  })
}); // end describe block
