import { TEST_ACTION_1, TEST_ACTION_2 } from '../constants';

// Just for understanding, can be deleted after use.
export function onIncrement(index) {
    return { type: TEST_ACTION_1, payload: index };
}

export const onDecrement = () => (
    { type: TEST_ACTION_2 }
);


// import { useDispatch, useSelector } from "react-redux"; use these to dispatch actions.
// Ex - dispatch(increment(5)); increment the state array value by 5, dispatch(decrement()) will decrease the state array value by 1.
// const testArray = useSelector(state=> state.testArray);