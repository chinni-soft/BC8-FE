import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import CustomTableHeader from "../../../molecules/CustomTableHeader";
import GroupCellRenderer from "../../../molecules/GroupCellRenderer";
import PrimaryColumnTableCell from "../../../molecules/PrimaryColumnTableCell";
import "../../../../App.scss";

const AllExternalPartnersTable = (props) => {
  let [gridApi, setGridApi] = useState();
  const { trustGroups } = props;

  useEffect(() => {
    if (gridApi) {
      gridApi.setRowData(props.data);
    }
  }, [props.data]);

  const gridOptions = {
    columnDefs: [
      {
        headerName: "Trust Score",
        field: "trustScore",
        maxWidth: 200,
      },
      {
        headerName: "Group",
        field: "group",
        cellRenderer: "groupCellRenderer",
        cellRendererParams: {
          handleGroupChange: (domain_trust_group_id, trust_group_id) =>
            props.handleGroupChange(domain_trust_group_id, trust_group_id),
          trustGroups: trustGroups,
        },
        rowGroup: true,
      },
    ],
    headerHeight: 32,
    defaultColDef: {
      flex: 1,
      autoHeight: true,
      sortable: true,
      resizable: true,
      headerComponentFramework: CustomTableHeader,
      cellStyle: (params) => {
        if (params.node.footer) {
          if (params.colDef.field === "domain") {
            return { borderRightColor: "#dde2eb" };
          } else {
            return { borderRightColor: "transparent" };
          }
        } else {
          return null;
        }
      },
      headerClass: "external-partners-header-cell-class",
    },
    frameworkComponents: {
      groupCellRenderer: GroupCellRenderer,
      groupHeaderColumn: PrimaryColumnTableCell,
    },
    getRowHeight: (params) => {
      return params.node.footer ? 32 : params.node.group ? 49 : 31;
    },
    rowClass: "external-partners-row-class",
    getRowStyle: (params) => {
      if (params.node.group) {
        if (params.node.footer) {
          return {
            borderBottom: "1px solid #dde2eb",
            borderRadius: " 0px 0px 5px 5px",
            top: `${5 * (params.node.childIndex + 1)}px`,
          };
        } else {
          return {
            borderTop: "1px solid #dde2eb",
            borderRadius: "5px 5px 0px 0px",
            top: `${5 * (params.node.childIndex + 1)}px`,
          };
        }
      } else {
        return { top: `${5 * (params.node.parent.childIndex + 1)}px` };
      }
    },

    rowData: null,
    autoGroupColumnDef: {
      headerName: "Domain",
      field: "address",
      cellRenderer: "groupHeaderColumn",
      cellRendererParams: {
        suppressDoubleClickExpand: true,
        // innerRenderer: "groupHeaderColumn",
        suppressCount: true,
      },
      sortable: true,
      minWidth: 300,
    },
  };
  const onGridReady = (params) => {
    setGridApi(params.api);
  };
  return (
    <Grid
      className="ag-theme-alpine"
      style={{
        height: "650px",
        width: "750px",
      }}
    >
      <AgGridReact
        onGridReady={onGridReady}
        groupDefaultExpanded={-1}
        defaultColDef={gridOptions.defaultColDef}
        autoGroupColumnDef={gridOptions.autoGroupColumnDef}
        columnDefs={gridOptions.columnDefs}
        getRowHeight={gridOptions.getRowHeight}
        getRowStyle={gridOptions.getRowStyle}
        frameworkComponents={gridOptions.frameworkComponents}
        headerHeight={gridOptions.headerHeight}
        groupIncludeFooter={true}
        rowClass={gridOptions.rowClass}
        rowData={props.data}
      ></AgGridReact>
    </Grid>
  );
};
export default AllExternalPartnersTable;
