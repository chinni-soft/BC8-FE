import React from "react";
import TrustedGroupTable from "./TrustedGroupTable";
import "@testing-library/jest-dom/extend-expect";
import { AgGridReact } from "ag-grid-react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";
configure({ adapter: new Adapter() });

jest.spyOn(console, "error").mockImplementation(() => {});
jest.spyOn(console, "warn").mockImplementation(() => {});

const testRowData = [
  {
    domain: "skyflow.com",
    trustScore: 770,
    relationship: "Vendor",
  },
  {
    domain: "zemosolabs.com",
    trustScore: 750,
    relationship: "Vendor",
  },
  {
    domain: "pekarilabs.com",
    trustScore: 760,
    relationship: "Vendor",
  },
  {
    domain: "cleardin.com",
    trustScore: 770,
    relationship: "Partner",
  },
  {
    domain: "otka.com",
    trustScore: 850,
    relationship: "Customer",
  },
  {
    domain: "sbwire.com",
    trustScore: 760,
    relationship: "Vendor",
  },
  {
    domain: "ycombinator.com",
    trustScore: 740,
    relationship: "Partner",
  },
  {
    domain: "cdc.com",
    trustScore: 760,
    relationship: "Vendor",
  },
  {
    domain: "columbia.com",
    trustScore: 710,
    relationship: "Partner",
  },
  {
    domain: "4shared.com",
    trustScore: 730,
    relationship: "Customer",
  },
  {
    domain: "nba.com",
    trustScore: 840,
    relationship: "Customer",
  },
];

const ensureGridApiHasBeenSet = (wrapper) => {
  return new Promise(function (resolve, reject) {
    (function waitForGridReady() {
      if (wrapper.api && wrapper.props.rowData.length) {
        resolve(wrapper);
        return;
      }
      setTimeout(waitForGridReady, 1000);
    })();
  });
};

describe("Trusted Group Table", () => {
  let trustedGroupComponent = null;
  let agGridReact = null;
  beforeEach((done) => {
    trustedGroupComponent = mount(<TrustedGroupTable data={testRowData} />);
    agGridReact = trustedGroupComponent.find(AgGridReact).instance();
    ensureGridApiHasBeenSet(agGridReact).then(() => done());
  });
  afterEach(() => {
    trustedGroupComponent.unmount();
    trustedGroupComponent = null;
    agGridReact = null;
  });

  test("Render without crashing", () => {
    expect(trustedGroupComponent.find(".ag-theme-alpine").exists()).toBeTruthy();
    expect(agGridReact.api).toBeTruthy();
  });
});
