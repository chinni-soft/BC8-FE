import React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import theme from "../../../utils/theme";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  indexCell: {
    width: "50px",
    marginLeft: theme.spacing(2.5),
  },
}));
const PrimaryColumnTableCell = (props) => {
  const classes = useStyles();
  return (
    <Grid>
      {props.data ? (
        <Grid className={classes.root}>
          <Grid className={classes.indexCell}>{props.node.rowIndex + 1}</Grid>
          {props.value}
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  );
};

export default PrimaryColumnTableCell;
