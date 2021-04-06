var RobotEyes = require('../../Robots/Rayshield/Robot.ts').RobotEyes;
var RobotHands = require('../../Robots/Rayshield/Robot.ts').RobotHands;
var Dependencies = require('../../Robots/Rayshield/Robot.ts').Dependencies;
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies()

export default class Home {
    mockInitialData() {
        dependencies.mockInitialData();
    }
    visitHomePage() {
        dependencies.visitRayShieldHome();
    }
    connectGSuiteCollaborator (){
        robotEyes.seesMainPage();
        robotHands.EnableCollaboratorAccess();
        robotHands.selectGSuiteConnector();
        robotHands.addGSuiteConnector();
    }
}
