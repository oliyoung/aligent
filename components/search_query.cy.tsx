import React from 'react'
import SearchQuery from './search_query'

describe('<SearchQuery />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<SearchQuery onSearch={() => { }} />)
    })
})