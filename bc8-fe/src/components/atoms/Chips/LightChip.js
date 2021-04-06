import React from "react";
import Chip from "@material-ui/core/Chip";
import makeStyles from "@material-ui/core/styles/makeStyles";
const useStyles = makeStyles((theme) => ({
    chip: {
        margin: 2,
        opacity: 0.5,
        fontWeight: 400
    }

}));
const LightChip = (props)=>{
    const classes = useStyles();
    return (
        <Chip size="small" label={props.label} className={classes.chip} />
    )
}
export default LightChip;