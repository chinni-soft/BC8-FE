import React from "react";
import {Button, Grid} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {onDecrement, onIncrement} from "../../actions/testAction";

const TestRedux = (props)=> {
    const dispatch = useDispatch();
    const testArray = useSelector(state=> state.testArray);
    return (
        <Grid>
            <Button color="primary" onClick={()=>dispatch(onIncrement(5))}>Increment Array Element 5</Button>
            <Button color="secondary" onClick={()=>dispatch(onDecrement())}>Decrement Array Element By 1</Button>
            <ul>
            {testArray.map((data,index)=><li key={index}>{data}</li>)
            }
            </ul>
        </Grid>
    )
}
export default TestRedux;