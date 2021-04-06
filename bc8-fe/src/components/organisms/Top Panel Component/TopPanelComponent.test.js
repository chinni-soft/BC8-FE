import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TopPanelComponent from "./TopPanelComponent";

afterEach(cleanup);

describe("TopPanelComponent", () => {
  test("check if top panel component is loaded", () => {
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
    const { getByTestId } = render(
      <TopPanelComponent departments={departments} handleDepartmentChange={handleDepartmentChange} />
    );
    const department = getByTestId("department");
    expect(department).toBeDefined();
    fireEvent.click(department);
  });
});
