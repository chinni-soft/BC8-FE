import { combineReducers } from "redux";
import { ApplicationReducer } from "./ApplicationReducer";
import TestReducer from "./TestReducer";
import { userReducer } from "./UserReducer";

export default combineReducers({
  appData: ApplicationReducer,
  testArray: TestReducer,
  userData: userReducer
});
