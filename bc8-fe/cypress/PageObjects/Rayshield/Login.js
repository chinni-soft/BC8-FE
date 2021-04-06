var Dependencies = require('../../Robots/Rayshield/Robot.ts').Dependencies;
const dependencies = new Dependencies()

export default class Login {
    googleLogin(){
        dependencies.loginToRayshield();
    }
}
