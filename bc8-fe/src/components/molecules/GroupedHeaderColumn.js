import React from "react";
import Grid from "@material-ui/core/Grid";
import GroupedHeaderCell from "./GroupedHeaderCell";

const GroupedHeaderColumn = (props)=> {
        return (
            <Grid>
                {props.data ?
                    props.value
                    : <GroupedHeaderCell {...props}/>
                }
            </Grid>
        )
}

export default GroupedHeaderColumn;