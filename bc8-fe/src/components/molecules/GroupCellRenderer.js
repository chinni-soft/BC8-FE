import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Grid, Typography } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import theme from "../../utils/theme";
import { getChip } from "../../helpers/AllExternalPartnersHelper";

const useStyles = makeStyles(() => ({
  select: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
  formControl: {
    minWidth: 150,
  },
  disabledOption: {
    fontSize: "12px",
    fontWeight: "bold",
  },
  chipOpacity: {
    opacity: 0.5,
  },
  darkChip: {
    backgroundColor: "#444444",
    color: "#ffffff",
  },
}));

const GroupCellRenderer = (props) => {
  const classes = useStyles();
  const { trustGroups } = props;
  const getTrustGroup = (value) => {
    if (trustGroups.length > 0) {
      const trustgroup = trustGroups.find((trustGroup) => trustGroup.displayName === value);
      return trustgroup ? trustgroup.id : "";
    }
    return "";
  };

  const handleGroupChange = (event) => {
    const change_trust_group_id = getTrustGroup(event.target.value);
    props.handleGroupChange(props.data.id, change_trust_group_id);
  };
  return (
    <Grid>
      {props.value && (
        <FormControl className={classes.formControl}>
          <Select
            classes={{ select: classes.select }}
            value={props.value}
            input={<Input />}
            disableUnderline
            onChange={handleGroupChange}
            inputProps={{ "data-testid": "group-menu" }}
          >
            <MenuItem disabled value="">
              <Typography className={classes.disabledOption}>Find An Option</Typography>
            </MenuItem>
            {trustGroups.map((eachTrustGroup, index) => {
              return (
                <MenuItem value={eachTrustGroup.displayName} key={eachTrustGroup.id}>
                  {getChip(eachTrustGroup.displayName)}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
    </Grid>
  );
};
export default GroupCellRenderer;
