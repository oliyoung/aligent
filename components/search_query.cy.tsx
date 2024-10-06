import React from 'react'
import SearchQuery from './search_query'

describe('<SearchQuery />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<SearchQuery onSearch={() => { }} />)
        cy.get('[data-testid="searchQuery"]')
            .should('exist')
            .should('be.visible')

        cy.get('[data-testid="searchQuery_Title"]')
            .should('exist')
            .should('be.visible')

        cy.get('[data-testid="searchQuery_Year"]')
            .should('exist')
            .should('be.visible')

        cy.get('[data-testid="searchQuery_Type"]')
            .should('exist')
            .should('be.visible')
    })

    it('searches on searchQuery_Title change', () => {
        const onSearch = cy.stub().as("onSearch")
        cy.mount(<SearchQuery onSearch={onSearch} />)
        cy.get('[data-testid="searchQuery_Title"] input').type("Test")
        cy.get('@onSearch').should('be.calledWith', { title: 'T', type: 'any', year: '2000' })
    })

    it('searches on searchQuery_Year change', () => {
        const onSearch = cy.stub().as("onSearch")
        cy.mount(<SearchQuery onSearch={onSearch} />)
        cy.get('[data-testid="searchQuery_Year"]').trigger('mousedown')
        cy.get('@onSearch').should('be.calledWith', { title: '', type: 'any', year: '2000' })
    })

    it('searches on searchQuery_Type change', () => {
        const onSearch = cy.stub().as("onSearch")
        cy.mount(<SearchQuery onSearch={onSearch} />)
        cy.get('[data-testid="movie_type"]').trigger('click')
        cy.get('@onSearch').should('be.calledWith', { title: '', type: 'any', year: '2000' })
    })

})

