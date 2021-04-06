export const getPermissions = (response)=>{
    const url = `${Cypress.env("REACT_APP_TRUST_MANAGEMENT_SERVICE")}/v1/permissions?collaborator_id=*`;
    cy.route({
        method:'GET',
        url: url,
        response
    }).as('getPermissions')
}
