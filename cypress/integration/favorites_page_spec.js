beforeEach(() => {
  cy.intercept('GET', 'https://api.openbrewerydb.org/breweries?by_city=detroit', { fixture: 'breweries' }).as('breweries')
  cy.visit('http://localhost:3000/home')
})

describe(' User flow and functionality for Favorites page', () => {

  it('Should change the url when clicking on the Favorites nav link in the header', () => {
    cy.get('nav').find('li.favorites-link').click()
    cy.url().should('includes', '/favorites')
  })

  it('Should show the correct elements on the favorites page when visiting', () => {
    cy.get('nav').find('li.favorites-link')
    cy.get('nav').find('li.see-all-link')
    cy.get('nav').find('a[href="https://visitmidtown.com/?gclid=Cj0KCQjwkbuKBhDRARIsAALysV7rpLcze26PbLaSM9gFpNHyGCWj04oEzDTbsNQyl9x09yVa8NwA67caAsTeEALw_wcB"]')
  })

  it('Should show the corresponding brewery cards on the favorites page after favoriting', () => {
    cy.get('article').find('img.favoriting-image.notFaved').click({ multiple: true })
    cy.get('nav').find('li.favorites-link').click()
    cy.url().should('includes', '/favorites')
    cy.get('article').find('img.faved').should('have.length', 2)

    cy.get('article').find('h2').contains('Atwater Brewing Co')
    cy.get('article').find('h3').contains('Brewery Type: regional')
    cy.get('article').find('p').contains('237 Joseph Campau St')
    cy.get('article').find('p').contains('Detroit, Michigan')
    cy.get('article').find('p').contains('48207-4107')
    cy.get('article').find('h3').contains('3138779205')
    cy.get('article').find('a').contains('Website')

    cy.get('article').find('h2').contains('Batch Brewing Co')
    cy.get('article').find('h3').contains('Brewery Type: brewpub')
    cy.get('article').find('p').contains('1400 Porter St')
    cy.get('article').find('p').contains('Detroit, Michigan')
    cy.get('article').find('p').contains('48216-1934')
    cy.get('article').find('h3').contains('3133388008')
    cy.get('article').find('a').contains('Website')

  })

  it('Should not show the cards anymore after unfavorting them from the favorites page', () => {
    cy.get('article').find('img.favoriting-image.notFaved').click({ multiple: true })
    cy.get('nav').find('li.favorites-link').click()
    cy.url().should('includes', '/favorites')
    cy.get('article').find('img.faved').should('have.length', 2)
    cy.get('article').find('img.favoriting-image.faved').click({ multiple: true })
    cy.get('article.brewery-card-container').should('not.exist')
  })
}); // end describe block
