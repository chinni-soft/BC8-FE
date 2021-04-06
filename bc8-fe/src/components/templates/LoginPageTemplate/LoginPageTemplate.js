import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
      height: '100vh',
      width: '100vw'
  }
}));

export default function TableScreenTemplate(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} alignItems={'center'} justify={'center'}>
      <Grid item>
        <Grid>{props.body}</Grid>
      </Grid>
    </Grid>
  );
}
