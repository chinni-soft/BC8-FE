import * as departmentMock from "../../support/mocks/departmentMocks.js";
import * as domainTrustGroupMocks from "../../support/mocks/domainTrustGroupMocks.js";
import * as permissionGrantMocks from "../../support/mocks/permissionGrantMocks.js";
import * as permissionMocks from "../../support/mocks/permissionsMocks.js";
import * as trustGroupMocks from "../../support/mocks/trustGroupMocks.js";
const homeLocator = require("../../fixtures/locator/home.json");
const dashboardLocator = require("../../fixtures/locator/dashboard.json");

var BaseHands = require("../BaseRobots.ts").BaseHands;
var BaseEyes = require("../BaseRobots.ts").BaseEyes;
var BaseDependencies = require("../BaseRobots.ts").BaseDependencies;

export class Dependencies extends BaseDependencies {
  loginToRayshield() {
    cy.googleLogin(Cypress.env("googleSocialLoginUsername"), Cypress.env("googleSocialLoginPassword"));
  }
  mockInitialData() {
    cy.server();
    cy.fixture("data/department.json").then((response) => {
      departmentMock.getDepartments(response.getCurrentDepartments);
    });
    cy.fixture("data/permissionGrant.json").then((response) => {
      permissionGrantMocks.getPermissionGrants(response.getCurrentPermissionGrants);
    });
    cy.fixture("data/permissions.json").then((response) => {
      permissionMocks.getPermissions(response.getCurrentPermissions);
    });
    cy.fixture("data/trustGroup.json").then((response) => {
      trustGroupMocks.getTrustGroups(response.getCurrentTrustGroup);
    });
    cy.fixture("data/domainTrustGroup.json").then((response) => {
      domainTrustGroupMocks.getTrustGroupDomains(response.getCurrentDomainTrustGroups);
    });
  }

  visitRayShieldHome() {
    this.accessUrl("/");
  }
}

export class RobotEyes extends BaseEyes {
  seesMainPage() {
    this.seesTextWithClass(homeLocator.accessButtonClass, homeLocator.noActivePermission);
  }
}

export class RobotHands extends BaseHands {
  EnableCollaboratorAccess() {
    this.ClickOnTextWithClass(homeLocator.enableAccessClass, homeLocator.enableAccess);
  }
  selectGSuiteConnector() {
    this.ClickOnTextWithClass(homeLocator.googleSuiteCollaboratorClass, homeLocator.googleSuite);
  }
  addGSuiteConnector() {
    this.ClickOnTextWithClass(homeLocator.addConnectorClass, homeLocator.add);
  }
  selectAllExternalPartnerTab() {
    this.ClickOnTextWithClass(dashboardLocator.allExternalPartnerTabClass, dashboardLocator.allExternalPartners);
  }
  changeTrustGroup() {
    this.clickOnDomElement(dashboardLocator.zemosoDomainTrustGroupDom);
    cy.server();
    cy.fixture("data/domainTrustGroup.json").then((response) => {
      domainTrustGroupMocks.updateTrustGroupDomain(response.putTrustGroupDomain);
      domainTrustGroupMocks.getTrustGroupDomains(response.getUpdatedTrustGroupDomains);
    });
    this.clickOnDomElement(dashboardLocator.top100TrustGroupDom);
    cy.wait("@updateTrustGroupDomain");
  }
  addTrustGroup() {
    cy.server();
    cy.fixture("data/trustGroup.json").then((response) => {
      trustGroupMocks.postTrustGroup(response.postTrustGroup);
      trustGroupMocks.getTrustGroups(response.getUpdatedTrustGroup);
    });
    this.clickOnDomElement(dashboardLocator.addTrustGroupIcon);
    this.typeTextonDom(dashboardLocator.dataTestId, dashboardLocator.createModalInput, dashboardLocator.top40000);
    this.ClickOnTextWithClass(dashboardLocator.createTrustGroupButton, dashboardLocator.create);
    cy.wait("@addTrustGroup");
  }

  switchTrustGroup() {
    this.ClickOnTextWithClass(dashboardLocator.selectTrustGroupTab, dashboardLocator.top100);
    this.ClickOnTextWithClass(dashboardLocator.selectTrustGroupTab, dashboardLocator.top10000);
    this.ClickOnTextWithClass(dashboardLocator.selectTrustGroupTab, dashboardLocator.top30000);
    this.ClickOnTextWithClass(dashboardLocator.selectTrustGroupTab, dashboardLocator.top40000);
  }

  changeTrustGroupPermission() {
    cy.server();
    cy.fixture("data/permissionGrant.json").then((response) => {
      permissionGrantMocks.putPermissionGrant(response.putPermissionGrant);
      permissionGrantMocks.getPermissionGrants(response.getUpdatedPermissionGrants);
    });
    this.clickOnDomElement(dashboardLocator.changePermissionGrant);
    cy.wait("@updatePermissionGrants");
  }

  selectGoogleCommunicationBase() {
    this.clickOnDomElement(dashboardLocator.selectBaseCommunication);
  }
  addDepartment() {
    cy.server();
    cy.fixture("data/department.json").then((response) => {
      departmentMock.postDepartment(response.postDepartment);
      departmentMock.getDepartments(response.getUpdatedDepartments);
    });
    this.clickOnDomElement(dashboardLocator.selectBaseCommunication);
    this.clickOnDomElement("[data-testid=department]");
    this.clickOnDomElement(dashboardLocator.addDepartmentButton);
    this.typeTextonDom(
      dashboardLocator.dataTestId,
      dashboardLocator.createModalInput,
      dashboardLocator.securityDepartment
    );
    this.ClickOnTextWithClass(dashboardLocator.createTrustGroupButton, dashboardLocator.create);
    cy.wait("@addDepartment");
    this.clickOnDomElement("[data-testid=department]");
    this.clickOnDomElement(
      dashboardLocator.selectSecurityDepartment
    );
  }
}
