import { LOGGED_IN, LOGGED_OUT } from "../../constants"
import { onLoggedIn, onLoggedOut } from '../../actions/userAction';


describe("user action", () => {
    it("test on logged in action", () => {
        expect(onLoggedIn()).toEqual({ type: LOGGED_IN });
    });

    it("test on logged out action", () => {
        expect(onLoggedOut()).toEqual({ type: LOGGED_OUT });
    });
})