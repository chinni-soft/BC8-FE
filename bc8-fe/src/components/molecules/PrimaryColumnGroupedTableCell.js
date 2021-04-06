import React from "react";
import {Grid, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddIcon from '@material-ui/icons/Add';
import theme from "../../utils/theme";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { getChip } from "../../helpers/AllExternalPartnersHelper";

const useStyles = makeStyles(() => ({
    root: {
        display:"flex",
    },
    smallText: {
        fontSize: "10px",
        color: "black",
        opacity: 0.5,
        fontWeight: 500
    },
    cellCount: {
        justifyContent:"flex-end",
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0),
        display:"flex",
        alignItems:"center",
        right: theme.spacing(4),
        position: "absolute"
    },
    marginLeft: {
        marginLeft: theme.spacing(1)
    },
    customIcon: {
        fontWeight: 500,
        padding: theme.spacing(1.25)
    },
    expandArrowStyle: {
        width:"58px",
        paddingTop: theme.spacing(2.5),
        paddingRight: theme.spacing(.5),
        paddingBottom: theme.spacing(2.5),
        paddingLeft: theme.spacing(.5),
    }

}));

const PrimaryColumnGroupedTableCell = (props) => {
    const classes = useStyles();
    const {value, node} = props;

    const toggleExpandRequested= (event)=> {
        node.setExpanded(!props.node.expanded);
    }
    return (
        <Grid>
        {node.footer ?
                <Grid className={classes.customIcon}>
                    <AddIcon fontSize="small"/>
                </Grid>
            :
             <Grid className={classes.root}>
                 {node.expanded ?
                     <Grid className={classes.expandArrowStyle}>
                         <IconButton aria-label="Menu" size="small" onClick={toggleExpandRequested}>
                             <ArrowDropDownIcon fontSize="small"/>
                         </IconButton>
                     </Grid>
                     :
                     <Grid className={classes.expandArrowStyle}>
                         <IconButton aria-label="Menu" size="small" onClick={toggleExpandRequested}>
                             <ArrowRightIcon fontSize="small"/>
                         </IconButton>
                     </Grid>
                 }
                    <Grid>
                        <Typography className={classes.smallText}>GROUP</Typography>
                        {getChip(value)}
                    </Grid>
                    <Grid className={classes.cellCount}>
                        <Typography className={classes.smallText}>Count
                        </Typography>
                        <Typography variant="body2" className={classes.marginLeft}>{props.node.allChildrenCount}  </Typography>
                    </Grid>
                </Grid>
        }
        </Grid>
    )
}
export default PrimaryColumnGroupedTableCell;