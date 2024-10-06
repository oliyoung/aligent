import React from 'react'
import SearchResults from './search_results'

describe('<SearchResults />', () => {
    beforeEach("load fixture", function () {
        cy.fixture("search_results").then((data) => {
            this.data = data;
        })
    })

    it('renders empty ', function () {
        const onSelect = cy.stub().as("onSelect")
        cy.mount(<SearchResults onSelect={onSelect} results={{ Response: true }} />)
        cy.get('[data-testid="searchResult_tt0368226"]')
            .should('not.exist')
        cy.get('[data-testid="searchResult_results"]')
            .should('not.exist')
        cy.get("@onSelect").should('not.be.called')
    })

    it('renders', function () {
        const onSelect = cy.stub().as("onSelect")
        cy.mount(<SearchResults onSelect={onSelect} results={this.data} />)
        cy.get('[data-testid="searchResult_tt0368226"]')
            .should('exist')
            .should('be.visible')
        cy.get('[data-testid="searchResult_results"]')
            .should('exist')
        cy.get("@onSelect").should('not.be.called')
    })

    it('changes current selected title', function () {
        const onSelect = cy.stub().as("onSelect")
        cy.mount(<SearchResults onSelect={onSelect} results={this.data} />)
        cy.get('[data-testid="searchResult_tt0368226"]')
            .click()
        cy.get("@onSelect").should('be.called')
    })
})