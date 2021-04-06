import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TrustGroupPermissionGrid from "./TrustGroupPermissionGrid";
import CustomTableHeader from "./CustomTableHeader";
import PrimaryColumnTableCell from "./PrimaryColumnTableCell";
import "@testing-library/jest-dom/extend-expect";
import { AgGridReact } from "ag-grid-react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";
import CustomMarkIcon from "../../molecules/CustomMarkIcon/CustomMarkIcon";
configure({ adapter: new Adapter() });

jest.spyOn(console, "error").mockImplementation(() => {});
jest.spyOn(console, "warn").mockImplementation(() => {});

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

const updatePermissionGrant = jest.fn();

const trustgroups = [
  {
    id: "8d4d7810-a513-4956-876b-01c87efc04d6",
    displayName: "DO NOT TRUST",
    description: "Domains that cannot be trusted",
  },
  {
    id: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    displayName: "Top 100",
    description: "Top 100 domains that can be trusted",
  },
  {
    id: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    displayName: "Top 10000",
    description: "Top 10000 domains that can be trusted",
  },
  {
    id: "3d30c4b4-e544-4060-9c96-5335687c090e",
    displayName: "Top 30000",
    description: "Top 30000 domains that can be trusted",
  },
];
const permissions = [
  {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    name: "READ",
    description: "Can view files?",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
  },
  {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    name: "COMMENT",
    description: "Can comment on files?",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
  },
  {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    name: "WRITE",
    description: "Can edit files?",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
  },
  {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    name: "SHARE",
    description: "Can transfer ownership of files?",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
  },
];
const permissionGrantMapping = [
  {
    id: "b5f97c02-75b4-4c25-8fc5-3f582efe3b47",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "aea99816-277d-438d-b892-432066c40ca0",
    flag: false,
  },
  {
    id: "96ad686a-6d26-4c9d-ba2f-0427db70e14f",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "aea99816-277d-438d-b892-432066c40ca0",
    flag: false,
  },
  {
    id: "5dbb5cd4-67c7-46d7-b721-75fe3b3a9f47",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "aea99816-277d-438d-b892-432066c40ca0",
    flag: false,
  },
  {
    id: "e597694b-6307-4ed4-89c1-f8b7ef11bcb3",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "aea99816-277d-438d-b892-432066c40ca0",
    flag: false,
  },
  {
    id: "4adefc0c-34fc-4c43-bc82-b763b503c811",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "aea99816-277d-438d-b892-432066c40ca0",
    flag: true,
  },
  {
    id: "b816d318-4be5-40eb-986a-b92ed556f766",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "aea99816-277d-438d-b892-432066c40ca0",
    flag: true,
  },
  {
    id: "98bc2e69-a6e2-4fdc-9d79-7f9eada59613",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "aea99816-277d-438d-b892-432066c40ca0",
    flag: true,
  },
  {
    id: "c64b49b2-02ca-4f74-a046-3992df53fdad",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "aea99816-277d-438d-b892-432066c40ca0",
    flag: true,
  },
  {
    id: "4870ad08-c17d-41f5-9383-a223445cd88c",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "aea99816-277d-438d-b892-432066c40ca0",
    flag: true,
  },
  {
    id: "d8b4d5a7-3228-4f81-9f55-53c75a33c3bb",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "aea99816-277d-438d-b892-432066c40ca0",
    flag: true,
  },
  {
    id: "149af3cb-9312-403f-aa68-82c1b2056bb9",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "aea99816-277d-438d-b892-432066c40ca0",
    flag: true,
  },
  {
    id: "3f0450f5-2560-4773-b081-584de1180e0e",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "aea99816-277d-438d-b892-432066c40ca0",
    flag: true,
  },
  {
    id: "c48eec9e-f4bb-4877-bcf4-7cefb76bda46",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "aea99816-277d-438d-b892-432066c40ca0",
    flag: false,
  },
  {
    id: "8754b6d2-1001-4651-bdbf-b31616a2960b",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "aea99816-277d-438d-b892-432066c40ca0",
    flag: false,
  },
  {
    id: "018db0c0-919f-43f8-b8df-8516d0847d03",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "aea99816-277d-438d-b892-432066c40ca0",
    flag: false,
  },
  {
    id: "ef190cef-4c3a-45eb-9361-259b60202479",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "aea99816-277d-438d-b892-432066c40ca0",
    flag: false,
  },
  {
    id: "05134885-4d32-4804-8ec2-1c17f512b7a0",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "533d3610-d071-4349-832f-f13e131e179c",
    flag: false,
  },
  {
    id: "d31fd536-0e35-4fa4-b54d-a8e2f696d411",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "533d3610-d071-4349-832f-f13e131e179c",
    flag: false,
  },
  {
    id: "272ac0d1-7a67-484e-b30a-6bc2e7b03171",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "533d3610-d071-4349-832f-f13e131e179c",
    flag: false,
  },
  {
    id: "8353cbd5-2dab-4133-b05c-163bbd7a5375",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "533d3610-d071-4349-832f-f13e131e179c",
    flag: false,
  },
  {
    id: "beeae95c-7b4b-4963-a3ef-f4d239618252",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "533d3610-d071-4349-832f-f13e131e179c",
    flag: true,
  },
  {
    id: "509bb6ef-f5d3-41e1-8d01-dc8db3c3e1bf",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "533d3610-d071-4349-832f-f13e131e179c",
    flag: true,
  },
  {
    id: "549516cc-6b16-4389-9df6-1e00f83569bf",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "533d3610-d071-4349-832f-f13e131e179c",
    flag: true,
  },
  {
    id: "e0e2e1e4-48fc-40c3-ba94-561737033fd0",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "533d3610-d071-4349-832f-f13e131e179c",
    flag: true,
  },
  {
    id: "f1dc8a82-8b53-4a66-bc77-88e21724a771",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "533d3610-d071-4349-832f-f13e131e179c",
    flag: true,
  },
  {
    id: "1bde2084-86fd-4431-a5d5-1d83395568d5",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "533d3610-d071-4349-832f-f13e131e179c",
    flag: true,
  },
  {
    id: "4ccb1345-ab9e-4387-b499-24baa7700414",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "533d3610-d071-4349-832f-f13e131e179c",
    flag: true,
  },
  {
    id: "094e3921-6ad6-497b-acf9-569d93851e1d",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "533d3610-d071-4349-832f-f13e131e179c",
    flag: true,
  },
  {
    id: "dc54c703-9983-4e1d-a1d4-42fee46a2643",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "533d3610-d071-4349-832f-f13e131e179c",
    flag: true,
  },
  {
    id: "58c65aea-b012-4ac9-a6f7-e00ca5980adc",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "533d3610-d071-4349-832f-f13e131e179c",
    flag: true,
  },
  {
    id: "4ee0d835-612f-4ab2-a128-91f6872d0bcd",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "533d3610-d071-4349-832f-f13e131e179c",
    flag: true,
  },
  {
    id: "22b3211b-f13f-4f88-8577-7a124e4ffa62",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "533d3610-d071-4349-832f-f13e131e179c",
    flag: false,
  },
  {
    id: "fd8464b5-6d76-4b6b-b2bf-c8e57acfbc6f",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "2694c94d-455c-44c8-94fb-ff43aa1c11eb",
    flag: false,
  },
  {
    id: "6d4bfdeb-686d-4260-a0c1-7a9dfa61eb04",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "2694c94d-455c-44c8-94fb-ff43aa1c11eb",
    flag: false,
  },
  {
    id: "53db2ead-09f9-4716-9845-6b2b48fd6415",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "2694c94d-455c-44c8-94fb-ff43aa1c11eb",
    flag: false,
  },
  {
    id: "0574b05e-afe1-416a-b2cd-c053f3812cd9",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "2694c94d-455c-44c8-94fb-ff43aa1c11eb",
    flag: false,
  },
  {
    id: "14ec9829-6281-472e-9857-5e59e3b94ac9",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "2694c94d-455c-44c8-94fb-ff43aa1c11eb",
    flag: true,
  },
  {
    id: "27509120-0a45-4821-b978-5d428d69eaf8",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "2694c94d-455c-44c8-94fb-ff43aa1c11eb",
    flag: true,
  },
  {
    id: "5bd719d3-6cb7-4d06-a4b3-20449fa480f6",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "2694c94d-455c-44c8-94fb-ff43aa1c11eb",
    flag: true,
  },
  {
    id: "75f8acc2-7035-42aa-a1de-e45d361f3a02",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "2694c94d-455c-44c8-94fb-ff43aa1c11eb",
    flag: true,
  },
  {
    id: "401b3997-ab02-46db-9599-94d269bb8e43",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "2694c94d-455c-44c8-94fb-ff43aa1c11eb",
    flag: true,
  },
  {
    id: "0c4e9367-aabe-4fbc-81d4-8b4092e8ae6f",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "2694c94d-455c-44c8-94fb-ff43aa1c11eb",
    flag: true,
  },
  {
    id: "0ffecda2-1c3e-4fc5-badd-bce4cecb839f",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "2694c94d-455c-44c8-94fb-ff43aa1c11eb",
    flag: true,
  },
  {
    id: "417309a3-3996-4b12-b4f4-ec9aba352aed",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "2694c94d-455c-44c8-94fb-ff43aa1c11eb",
    flag: true,
  },
  {
    id: "32b346d3-a8dc-4212-892f-ab909e96531d",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "2694c94d-455c-44c8-94fb-ff43aa1c11eb",
    flag: true,
  },
  {
    id: "84e5aa73-8f6c-4392-a3db-d45d4f407081",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "2694c94d-455c-44c8-94fb-ff43aa1c11eb",
    flag: true,
  },
  {
    id: "64fb95d5-d33e-4245-a851-0ff8e39b880d",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "2694c94d-455c-44c8-94fb-ff43aa1c11eb",
    flag: true,
  },
  {
    id: "d24c3e59-7f58-430e-9dfa-51434646a282",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "2694c94d-455c-44c8-94fb-ff43aa1c11eb",
    flag: false,
  },
  {
    id: "00f5d5a3-f0b9-4f6a-bb73-8edc221d0274",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "5367663d-e359-4305-baa2-b4e8ccdb80e3",
    flag: false,
  },
  {
    id: "0081c31c-2ee7-41e0-9ede-8e8dfaa77ce0",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "5367663d-e359-4305-baa2-b4e8ccdb80e3",
    flag: false,
  },
  {
    id: "4a6378fb-dee0-4dca-8bd7-d50fca82e4a7",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "5367663d-e359-4305-baa2-b4e8ccdb80e3",
    flag: false,
  },
  {
    id: "b85d551a-1d9f-462c-85b4-1c580e5a1de3",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "5367663d-e359-4305-baa2-b4e8ccdb80e3",
    flag: false,
  },
  {
    id: "38b71f0a-8ec5-45bb-9c1c-d4847036cbf1",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "5367663d-e359-4305-baa2-b4e8ccdb80e3",
    flag: true,
  },
  {
    id: "8e8d377d-80be-4bba-b3ba-fff2807e3dba",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "5367663d-e359-4305-baa2-b4e8ccdb80e3",
    flag: true,
  },
  {
    id: "10d6cadc-36bf-421c-a0e2-6bb13685c27e",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "5367663d-e359-4305-baa2-b4e8ccdb80e3",
    flag: true,
  },
  {
    id: "3812527a-b118-4ab6-ac11-a5270d1f56b3",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "5367663d-e359-4305-baa2-b4e8ccdb80e3",
    flag: true,
  },
  {
    id: "c64d0a7d-dbf0-41c8-bd5f-7d563a9cf65a",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "5367663d-e359-4305-baa2-b4e8ccdb80e3",
    flag: true,
  },
  {
    id: "ecc2e9ac-a03c-4829-9206-3c1ec2d9989c",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "5367663d-e359-4305-baa2-b4e8ccdb80e3",
    flag: true,
  },
  {
    id: "322bed50-938a-43e7-adbd-f02af4f3c9c8",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "5367663d-e359-4305-baa2-b4e8ccdb80e3",
    flag: true,
  },
  {
    id: "f9b87ae1-c6f5-4667-993a-7cdaa58de814",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "5367663d-e359-4305-baa2-b4e8ccdb80e3",
    flag: true,
  },
  {
    id: "a26ce8e3-a9e4-4dd4-b465-dd7033ea08e4",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "5367663d-e359-4305-baa2-b4e8ccdb80e3",
    flag: true,
  },
  {
    id: "5d071fd4-ddc4-44c6-aa62-2899c2fb393b",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "5367663d-e359-4305-baa2-b4e8ccdb80e3",
    flag: true,
  },
  {
    id: "e41c3458-3a7f-44d2-9fdb-7009b1b500f8",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "5367663d-e359-4305-baa2-b4e8ccdb80e3",
    flag: true,
  },
  {
    id: "1f3c766c-599e-42d9-b60a-042557165f7d",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "5367663d-e359-4305-baa2-b4e8ccdb80e3",
    flag: false,
  },
  {
    id: "9a6056e7-94a4-4c2d-81a0-6653d68e4347",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "d2f02f3b-47cd-4931-975e-8a15a8f2c8af",
    flag: false,
  },
  {
    id: "dd3e3f2f-55c5-4575-b805-09fc7373017e",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "d2f02f3b-47cd-4931-975e-8a15a8f2c8af",
    flag: false,
  },
  {
    id: "4327156c-75fc-4782-b7fb-8dfc278e98f1",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "d2f02f3b-47cd-4931-975e-8a15a8f2c8af",
    flag: false,
  },
  {
    id: "76f2b0fa-30dc-4e78-94d1-2d4ead553e47",
    trustgroupId: "8d4d7810-a513-4956-876b-01c87efc04d6",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "d2f02f3b-47cd-4931-975e-8a15a8f2c8af",
    flag: false,
  },
  {
    id: "72bf2c01-d7a7-40a5-8efd-99fddfbf3411",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "d2f02f3b-47cd-4931-975e-8a15a8f2c8af",
    flag: true,
  },
  {
    id: "fc7b8970-edce-484c-832a-a4073d6edcb9",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "d2f02f3b-47cd-4931-975e-8a15a8f2c8af",
    flag: true,
  },
  {
    id: "f5a8c024-17b3-4f4b-8037-210c3dbb4a4e",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "d2f02f3b-47cd-4931-975e-8a15a8f2c8af",
    flag: true,
  },
  {
    id: "80a2d085-359a-4706-b4c0-749c1f2b8807",
    trustgroupId: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "d2f02f3b-47cd-4931-975e-8a15a8f2c8af",
    flag: true,
  },
  {
    id: "fc23140a-5a00-4f2b-a0bf-cc828617c39f",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "d2f02f3b-47cd-4931-975e-8a15a8f2c8af",
    flag: true,
  },
  {
    id: "3ea0265a-18ca-40e9-9284-5eeabddcfef1",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "d2f02f3b-47cd-4931-975e-8a15a8f2c8af",
    flag: true,
  },
  {
    id: "043a3b9d-3506-4748-baa4-902363bdc40c",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "d2f02f3b-47cd-4931-975e-8a15a8f2c8af",
    flag: true,
  },
  {
    id: "3a9aa80d-9a73-4a5a-ad69-185e74bab9ca",
    trustgroupId: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "d2f02f3b-47cd-4931-975e-8a15a8f2c8af",
    flag: true,
  },
  {
    id: "41192074-bb62-45ff-9d0d-bda7a1f5a793",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "d2f02f3b-47cd-4931-975e-8a15a8f2c8af",
    flag: true,
  },
  {
    id: "b397348d-a044-45ee-9b4f-836f2108f767",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "d2f02f3b-47cd-4931-975e-8a15a8f2c8af",
    flag: true,
  },
  {
    id: "3847ec36-f73c-4f9b-a5dd-535111554a7f",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "d2f02f3b-47cd-4931-975e-8a15a8f2c8af",
    flag: true,
  },
  {
    id: "b8ada64a-a4de-4be8-befd-0ad9ed8dc43f",
    trustgroupId: "3d30c4b4-e544-4060-9c96-5335687c090e",
    permissionId: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
    collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
    departmentId: "d2f02f3b-47cd-4931-975e-8a15a8f2c8af",
    flag: false,
  },
];
describe("Permission Grid Ag Grid table", () => {
  let permissionGridComponent = null;
  let agGridReact = null;
  beforeEach((done) => {
    permissionGridComponent = mount(
      <TrustGroupPermissionGrid
        trustgroups={trustgroups}
        permissions={permissions}
        permissionGrantMapping={permissionGrantMapping}
        updatePermissionGrant={updatePermissionGrant}
      />
    );
    agGridReact = permissionGridComponent.find(AgGridReact).instance();
    ensureGridApiHasBeenSet(agGridReact).then(() => done());
  });
  afterEach(() => {
    permissionGridComponent.unmount();
    permissionGridComponent = null;
    agGridReact = null;
  });

  test("Render without crashing", () => {
    expect(permissionGridComponent.find(".ag-theme-alpine").exists()).toBeTruthy();
    expect(permissionGridComponent.find(".ag-theme-alpine")).toBeDefined();
    expect(agGridReact.api).toBeTruthy();
  });

  test("test header cell value", () => {
    expect(agGridReact.gridOptions.rowData.length).toBe(trustgroups.length);
    agGridReact.api.forEachNode((node, nodeInd) => {
      if (node.data) {
        const nodeIndex = trustgroups.findIndex((trustGroup) => trustGroup.id == node.data.id);
        Object.keys(node.data).forEach((colId) => {
          const cellValue = node.data[colId];
          if (colId === "trustGroup" || colId === "id") {
            const testValue =
              colId === "trustGroup" ? trustgroups[nodeIndex]["displayName"] : trustgroups[nodeIndex][colId];
            expect(cellValue).toEqual(testValue);
          }
        });
      }
    });
  });

  test("Test, Dependant components,CustomTableHeader", () => {
    const props = { displayName: "Trust Group" };
    const { getByText } = render(<CustomTableHeader {...props} />);

    expect(getByText("A")).toBeDefined();
  });

  test("Test, Dependant components,PrimaryColumnTableCell", () => {
    const props = { data: "Trust Group", value: "CustomValue", node: { rowIndex: 1 } };
    const { getByText } = render(<PrimaryColumnTableCell {...props} />);

    expect(getByText("CustomValue")).toBeDefined();
  });
});
