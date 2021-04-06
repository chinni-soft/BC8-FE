var RobotHands = require("../../Robots/Rayshield/Robot.ts").RobotHands;
const robotHands = new RobotHands();

export default class DashBoard {
  selectExternalPartnerTab() {
    robotHands.selectAllExternalPartnerTab();
  }
  changeTrustGroup() {
    robotHands.changeTrustGroup();
  }
  addTrustGroup() {
    robotHands.addTrustGroup();
  }
  switchTrustGroup() {
    robotHands.switchTrustGroup();
  }
  changeTrustGroupPermissionGrant() {
    robotHands.selectGoogleCommunicationBase();
    robotHands.changeTrustGroupPermission();
  }
  addDepartment() {
    robotHands.addDepartment();
  }
}
