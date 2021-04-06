export const getPermissionGrants = (response)=>{
    const url = `${Cypress.env("REACT_APP_TRUST_MANAGEMENT_SERVICE")}/v1/permission-grant?*`;
    cy.route({
        method:'GET',
        url: url,
        response
    }).as('getPermissionGrants')
}
export const putPermissionGrant = (response)=>{
    const url = `${Cypress.env("REACT_APP_TRUST_MANAGEMENT_SERVICE")}/v1/permission-grant`;
    cy.route({
        method:'PUT',
        delay: 1000,
        url: url,
        response
    }).as('updatePermissionGrants')
}
