import React from 'react'
import MediaTitle from './media_title'

describe('<MediaTitle />', () => {
    it('renders', () => {
        const title = {} as MediaSearchResult
        // see: https://on.cypress.io/mounting-react
        cy.mount(<MediaTitle partialMediaTitle={title} />)
    })
})