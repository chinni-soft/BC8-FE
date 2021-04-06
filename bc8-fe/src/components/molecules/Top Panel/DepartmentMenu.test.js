import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import DepartmentMenu from "./DepartmentMenu";
import { ADD_A_DEPARTMENT, ADD_DEPARTMENT_TITLE } from "../../../constants";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

afterEach(cleanup);
function frameDepartments(departments) {
  let departmentList = departments.map((department) => {
    department.icon = <PeopleOutlineIcon fontSize="small" />;
    return department;
  });
  const addDeptObj = {
    displayName: ADD_A_DEPARTMENT,
    icon: <AddCircleOutlineIcon fontSize="small" />,
  };
  departmentList.push(addDeptObj);
  return departmentList;
}
describe("Department Menu", () => {
  test("check if Department menu is loaded", () => {
    const departments = [
      {
        displayName: "Base Template",
        value: "1",
      },
      {
        displayName: "Sales",
        value: "2",
      },
      {
        displayName: "legal",
        value: "3",
      },
      {
        displayName: "finance",
        value: "4",
      },
    ];
    const handleDepartmentChange = jest.fn();
    const { getByTestId, getAllByText, container, id } = render(
      <DepartmentMenu departments={frameDepartments(departments)} handleDepartmentChange={handleDepartmentChange} />
    );
    const department = getByTestId("department");
    fireEvent.click(department);
    expect("Base Template").toBeDefined();
    const grid = container.firstChild;
    expect(grid).toBeDefined();
    fireEvent.click(grid);
  });
});
