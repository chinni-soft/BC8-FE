import { TEST_ACTION_1, TEST_ACTION_2 } from '../constants';
const initialState = [1,2,3,4,5]
// Examples...
const TestReducer = (state = initialState, action)=>{
    switch (action.type){
        case TEST_ACTION_1:
            return state.map(data=> data + action.payload);
        case TEST_ACTION_2:
            return state.map(data=> data-1);
        default:
            return state
    }
}
export default TestReducer;