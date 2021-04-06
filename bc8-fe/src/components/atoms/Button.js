import React from "react";
import { Button, Typography } from "@material-ui/core";

const ButtonComp = (props) => {
  return (
    <Button variant={props.variant} size="small" color="primary" className={props.className} onClick={props.onClick}>
      <Typography variant="button">{props.value}</Typography>
    </Button>
  );
};

export default ButtonComp;
