import React, {useState} from "react";
import {Grid} from "@material-ui/core";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import CustomTableHeader from "../../../molecules/CustomTableHeader";
import PrimaryColumnTableCell from "../../../molecules/PrimaryColumnTableCell";
import '../../../../App.scss';
import RelationShipCellRenderer from "../../../molecules/RelationShipCellRenderer";


const  TrustedGroupTable = (props)=>{
    let [gridApi, setGridApi] = useState();
    const gridOptions = {
        columnDefs: [
            {
                headerName: "Domain",
                field: "domain",
                cellRenderer: "primaryColumnTableCell",
            },
            {
                headerName: "Trust Score",
                field: "trustScore",
                headerComponentParams: {
                    trustScoreIcon: true
                },
                cellClass: ['text-align-right']
            },
            {
                headerName: "Relationship",
                field: "relationship",
                cellRenderer: "relationshipCellRenderer",
            }
        ],
        headerHeight: 32,
        defaultColDef: {
            flex: 1,
            sortable: true,
            resizable: true,
            headerComponentFramework: CustomTableHeader,
            cellStyle: (params)=> {
                if (params.node.footer) {
                    if(params.colDef.field === "domain") {
                        return { borderRightColor: "#dde2eb" };
                    }
                    else {
                        return { borderRightColor: "transparent" };
                    }
                } else {
                    return null;
                }
            }
        },
        frameworkComponents: {
            relationshipCellRenderer: RelationShipCellRenderer,
            primaryColumnTableCell: PrimaryColumnTableCell
        },
        getRowHeight: (params)=> {
            return params.node.group ? 33 : 31;
        },
        rowData: null,
    };
    const onGridReady = params =>{
        setGridApi(params.api);
    }
    return (
        <Grid
            className="ag-theme-alpine"
            style={{
                height: '550px',
                width: '750px' }}
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
                groupIncludeTotalFooter={true}
                rowData={props.data}>
            </AgGridReact>
        </Grid>

    )
}
export default TrustedGroupTable;