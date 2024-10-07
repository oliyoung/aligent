import React from 'react'
import MediaTitleComponent from './media_title'


describe('<MediaTitle />', () => {
    it('renders', () => {
        const imdbID = 'tt0368226'
        cy.intercept('GET', 'http://www.omdbapi.com/*', { fixture: 'media.json' }).as('getMedia')
        cy.mount(<MediaTitleComponent mediaSearchResult={{ imdbID }} />)
        cy.get('[data-testid="mediaTitle_title"]')
            .should('exist')
            .should('be.visible')
            .should("contain", "The Room")

        cy.get('[data-testid="mediaTitle_year"]')
            .should('exist')
            .should('be.visible')
            .should("contain", "2003")

        cy.get('[data-testid="mediaTitle_genre"]')
            .should('exist')
            .should('be.visible')
            .should("contain", "Drama")

        cy.get('[data-testid="mediaTitle_runtime"]')
            .should('exist')
            .should('be.visible')
            .should("contain", "99 min")

        cy.get('[data-testid="mediaTitle_actors"]')
            .should('exist')
            .should('be.visible')
            .should("contain", "Tommy Wiseau, Juliette Danielle, Greg Sestero")

        cy.get('[data-testid="mediaTitle_plot"]')
            .should('exist')
            .should('be.visible')
            .should("contain", "In San Francisco, an amiable banker's")

        cy.get('[data-testid="mediaTitle_ratings"]')
            .should('exist')
            .should('be.visible')
            .should("contain", "Internet Movie Database")
            .should("contain", "Rotten Tomatoes")
            .should("contain", "Metacritic")

    })
})