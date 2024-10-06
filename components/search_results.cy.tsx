import React from 'react'
import SearchResults from './search_results'

describe('<SearchResults />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<SearchResults onSelect={() => { }} />)
    })
})