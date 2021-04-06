import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import CustomTab from "./CustomTab";
afterEach(cleanup);
describe("Custom Tab", () => {
  test("Check the Tab is loaded", () => {
    const { getByText } = render(<CustomTab label="Google Communication" />);
    expect(getByText("Google Communication")).toBeDefined();
  });
});
