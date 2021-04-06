import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import PanelActions from "./PanelActions";
import FilterListIcon from "@material-ui/icons/FilterList";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";

afterEach(cleanup);
function getPanelActions() {
  return [
    { displayName: "Filter", value: "filter", icon: <FilterListIcon /> },
    { displayName: "Group", value: "group", icon: <ImportExportIcon /> },
    { displayName: "Sort", value: "sort", icon: <SortByAlphaIcon /> },
    { displayName: "", value: "horizIcon", icon: <MoreHorizIcon fontSize="large" /> },
  ];
}
describe("Department Menu", () => {
  test("check if Department menu is loaded", () => {
    const { getByText } = render(<PanelActions actions={getPanelActions()} />);
    const filter = getByText("Filter");
    expect(filter).toBeDefined();
  });
});
