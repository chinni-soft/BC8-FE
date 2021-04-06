import React from "react";
import {Grid, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import theme from "../../utils/theme";
import DarkChip from "../atoms/Chips/DarkChip";
import SemiDarkChip from "../atoms/Chips/SemiDarkChip";
import BasicChip from "../atoms/Chips/BasicChip";
import LightChip from "../atoms/Chips/LightChip";

const useStyles = makeStyles(() => ({
    root: {
        display:"flex",
        width:"180px"
    },
    smallText: {
        fontSize: "10px",
        color: "black",
        opacity: 0.5,
        fontWeight: 500
    },
    cellCount: {
        width:"100%",
        justifyContent:"flex-end",
        padding: theme.spacing(4, 0),
        display:"flex",
        alignItems:"center"
    },
    marginLeft: {
        marginLeft: theme.spacing(1)
    }

}));

const GroupedHeaderCell = (props) => {
    const { value } = props;
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid>
                <Typography className={classes.smallText}>GROUP</Typography>
                {value === "Do Not Trust" ? <DarkChip label="Do Not Trust"/>
                :value === "Top 30000" ? <SemiDarkChip label="Top 30000"/>
                :value === "Top 10000" ? <BasicChip label="Top 10000"/>
                : <LightChip label="Top 100"/>
                }
            </Grid>
            <Grid className={classes.cellCount}>
                <Typography className={classes.smallText}>Count
                </Typography>
                <Typography variant="body2" className={classes.marginLeft}>{props.node.allChildrenCount}  </Typography>
            </Grid>
        </Grid>
    )
}
export default GroupedHeaderCell;