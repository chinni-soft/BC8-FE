import Home from "../PageObjects/Rayshield/Home";
import Login from "../PageObjects/Rayshield/Login";
import DashBoard from "../PageObjects/Rayshield/DashBoard";
const rayshieldHome = new Home();
const rayshieldLogin = new Login();
const rayshieldDashBoard = new DashBoard();

describe("Logging to RayShield...", () => {
  it("Login initiated", () => {
    rayshieldLogin.googleLogin();
  });
});
describe("Initiated RayShield automated testing...", () => {
  before(() => {
    rayshieldHome.mockInitialData();
    rayshieldHome.visitHomePage();
  });

  it("Home-> change Trust group for domain", () => {
    rayshieldHome.connectGSuiteCollaborator();
    rayshieldDashBoard.selectExternalPartnerTab();
    rayshieldDashBoard.changeTrustGroup();
  });

  it("Add Trust Group", () => {
    rayshieldDashBoard.addTrustGroup();
  });

  it("Switching between Trust groups", () => {
    rayshieldDashBoard.switchTrustGroup();
  });

  it("Home-> change permission grant", () => {
    rayshieldDashBoard.changeTrustGroupPermissionGrant();
  });
  it("Add Department", () => {
    rayshieldDashBoard.addDepartment();
  });
});
