import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import "./TrustGroupAGGrid.scss";
import { AgGridReact } from "ag-grid-react";
import CustomMarkIcon from "../../molecules/CustomMarkIcon/CustomMarkIcon";
import CustomTableHeader from "./CustomTableHeader";
import PrimaryColumnTableCell from "./PrimaryColumnTableCell";

const TrustGroupsPermissionGrid = (props) => {
  const permissions = props.permissions;
  const trustgroups = props.trustgroups;
  const permissionGrantMapping = props.permissionGrantMapping;

  function getColumnDefs(permissions, permissionGrantMapping, trustgroups, updatePermissionGrant) {
    const defaultColDefs = [
      {
        headerName: "Number",
        field: "number",
        cellRenderer: "primaryColumnTableCell",
        maxWidth: 50,
      },
      {
        headerName: "Trust Group",
        field: "trustGroup",
        sortable: true,
        filter: true,
        maxWidth: 160,
      },
    ];
    const dynamicColDefs = permissions.map((permission) => {
      return {
        headerName: permission.description,
        field: permission.name,
        maxWidth: `${permission.description.length * 12}`,
        cellRenderer: "customMarkIcon",
        cellRendererParams: {
          updatePermissionGrantClick: (data, permissionGrantId) => {
            const status = !data.value;
            updatePermissionGrant(permissionGrantId, status);
          },
          permissionGrantMapping: permissionGrantMapping,
          permissions: permissions
        },
      };
    });
    return [...defaultColDefs, ...dynamicColDefs];
  }

  function getRowData(permissions, permissionGrantMapping, trustgroups) {
    return trustgroups.map((trustGroup) => {
      let returnObj = {};
      returnObj.trustGroup = trustGroup.displayName;
      returnObj.id = trustGroup.id;
      permissionGrantMapping
        .filter((data) => data.trustgroupId == trustGroup.id)
        .forEach((permissionData) => {
          let permissionName = permissions.find((permission) => permission.id === permissionData.permissionId)?.name;
          returnObj[permissionName] = permissionData.flag;
        });
      return returnObj;
    });
  }

  const gridOptions = {
    frameworkComponents: {
      customMarkIcon: CustomMarkIcon,
      primaryColumnTableCell: PrimaryColumnTableCell,
    },
    headerHeight: 29,
    getRowHeight: (params) => {
      return 29;
    },
    defaultColDef: {
      flex: 1,
      autoHeight: true,
      sortable: true,
      resizable: true,
      headerComponentFramework: CustomTableHeader,
    },
  };

  return (
    <Grid
      className="ag-theme-alpine"
      style={{
        height: "300px",
        width: "1150px",
      }}
    >
      <AgGridReact
        groupDefaultExpanded={-1}
        domLayout='autoHeight'
        defaultColDef={gridOptions.defaultColDef}
        columnDefs={getColumnDefs(permissions, permissionGrantMapping, trustgroups, props.updatePermissionGrant)}
        getRowHeight={gridOptions.getRowHeight}
        frameworkComponents={gridOptions.frameworkComponents}
        headerHeight={gridOptions.headerHeight}
        rowData={getRowData(permissions, permissionGrantMapping, trustgroups)}
      ></AgGridReact>
    </Grid>
  );
};
export default TrustGroupsPermissionGrid;
