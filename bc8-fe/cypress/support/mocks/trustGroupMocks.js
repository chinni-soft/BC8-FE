export const getTrustGroups = (response)=>{
    const url = `${Cypress.env("REACT_APP_TRUST_MANAGEMENT_SERVICE")}/v1/trust-groups`;
    cy.route({
        method:'GET',
        url: url,
        response
    }).as('getTrustGroup')
}
export const postTrustGroup = (response)=>{
    const url = `${Cypress.env("REACT_APP_TRUST_MANAGEMENT_SERVICE")}/v1/trust-groups`;
    cy.route({
        method:'POST',
        url: url,
        delay: 1000,
        response
    }).as('addTrustGroup')
}
