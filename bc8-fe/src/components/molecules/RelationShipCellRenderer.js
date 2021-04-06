import React from "react";
import { Grid } from "@material-ui/core";
import DarkChip from "../atoms/Chips/DarkChip";
import SemiDarkChip from "../atoms/Chips/SemiDarkChip";
import BasicChip from "../atoms/Chips/BasicChip";

const RelationShipCellRenderer = (props)=>{
    return (
        <Grid>
            {props.value == "Customer" ?
                <DarkChip label={props.value} />
                :props.value == "Vendor" ?
                <SemiDarkChip label={props.value} />
                    :props.value == "Partner" &&
                    <BasicChip label={props.value} />
            }
        </Grid>

    )
}
export default RelationShipCellRenderer;