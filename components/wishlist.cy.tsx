import React from 'react'
import Wishlist from './wishlist'

const localStorage = (result: any) => {
  const firstKey = Object.keys(result)[0]; // Trying to match the domain in cypress is painful
  return new Set(JSON.parse(result[firstKey]['wishlist'] as string))
}

describe('<Wishlist />', () => {
  it('renders', () => {
    cy.mount(<Wishlist imdbID='tt0368226' />)
    cy.get("[data-testid='wishlist']")
      .should('exist')
      .should('be.visible')
    cy.get("[data-testid='wishlist'] button")
      .should('exist')
      .should('be.visible')
    cy.get("[data-testid='wishlist'] button svg")
      .should('exist')
      .should('be.visible')

    cy.getAllLocalStorage().then((result) => {
      const wishlist = localStorage(result)
      expect(Object.values(wishlist).length).to.eq(0)
    })
  })

  it('Adds Item to Wishlist', () => {
    cy.mount(<Wishlist imdbID='tt0368226' />)
    cy.get("[data-testid='wishlist'] button.add-wishlist").click()

    cy.getAllLocalStorage().then((result) => {
      const wishlist = localStorage(result)
      expect(wishlist.has('tt0368226')).to.eq(true)
    })
  })

  it('Remove Item from Wishlist', () => {
    window.localStorage.setItem('wishlist', JSON.stringify(['tt0368226']))
    cy.mount(<Wishlist imdbID='tt0368226' />)
    cy.get("[data-testid='wishlist'] button.remove-wishlist").click()

    cy.getAllLocalStorage().then((result) => {
      const wishlist = localStorage(result)
      expect(wishlist.has('tt0368226')).to.eq(false)
    })
  })
})