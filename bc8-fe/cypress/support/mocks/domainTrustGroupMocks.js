export const getTrustGroupDomains = (response)=>{
    const url = `${Cypress.env("REACT_APP_DOMAIN_SERVICE")}/v1/domain-trust-group?*`;
    cy.route({
        method:'GET',
        url: url,
        response
    }).as('getTrustGroupDomain')
}
export const updateTrustGroupDomain = (response)=>{
    const url = `${Cypress.env("REACT_APP_DOMAIN_SERVICE")}/v1/domain-trust-group`;
    cy.route({
        method:'PUT',
        url: url,
        delay: 1000,
        response
    }).as('updateTrustGroupDomain')
}
