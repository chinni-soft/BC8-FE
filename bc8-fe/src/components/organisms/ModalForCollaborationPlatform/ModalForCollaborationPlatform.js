import React, { useState } from "react";
import CollaborationPlatform from "../../molecules/CollaborationPlatform/CollaborationPlatform";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";

const ModalForCollaborationPlatform = (props) => {
  const [active, setActive] = useState("");
  return (
    <Grid container item xs={12} alignItems={"center"} justify={"center"} style={{ height: "100vh" }}>
      <Grid container direction="column" style={{ width: "950px", height: "584px", backgroundColor: "#fff" }}>
        <Grid item>
          <div style={{ margin: "20px" }}>
            <Grid container direction="row" justify="space-between">
              <Grid item>
                <Typography variant="h6">Choose Collaboration Platform</Typography>
              </Grid>
              <Grid item>
                <Typography style={{ color: "#778ca2" }}>
                  <HighlightOffOutlinedIcon onClick={props.closeModal} />
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item>
          <div style={{ margin: "20px" }}>
            <Grid container spacing={9}>
              {props.platformsConfig?.map((platform) => (
                <Grid item>
                  <div onClick={() => setActive(platform.value)} data-testid={platform.name}>
                    <CollaborationPlatform
                      variant1="contained"
                      value1="Add"
                      variant2="outlined"
                      value2="Show Preview"
                      link={platform.link}
                      name={platform.name}
                      id={platform.id}
                      enabled={active === platform.value ? true : false}
                      setCollaboration={props.setCollaboration}
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ModalForCollaborationPlatform;
