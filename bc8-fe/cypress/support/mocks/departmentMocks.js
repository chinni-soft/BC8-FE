export const getDepartments = (response) => {
  const url = `${Cypress.env("REACT_APP_ORG_MANAGEMENT_SERVICE")}/v1/departments`;
  cy.route({
    method: "GET",
    url: url,
    response,
  }).as("getDepartments");
};
export const postDepartment = (response) => {
  const url = `${Cypress.env("REACT_APP_ORG_MANAGEMENT_SERVICE")}/v1/departments`;
  cy.route({
    method: "POST",
    url: url,
    delay: 1000,
    response,
  }).as("addDepartment");
};
