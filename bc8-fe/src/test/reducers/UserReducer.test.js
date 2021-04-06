import { onLoggedIn, onLoggedOut } from '../../actions/userAction';
import {userReducer as reducer, initialState} from '../../reducers/UserReducer';


describe("User reducer", () => {

    it("test logged in reducer", () => {

        const state = {};

        const action = onLoggedIn();
        expect(reducer(state, action)).toEqual({
            isLoggedIn : true
        });
    })

    it("test logged out reducer", () => {
        const state = {};
        const action = onLoggedOut();
        expect(reducer(state, action)).toEqual({
            isLoggedIn : false
        });
    })

})