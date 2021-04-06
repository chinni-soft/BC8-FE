import axios from "axios";
import { onFetchPermissionGrants } from "../../actions/trustGroupAction";
import { onUpdatePermissionGrants } from "../../actions/trustGroupAction";
import { getIdToken, oAuthRequest } from "../../helpers/UserHelper";

export const fetchPermissionGrants = (collaboratorId, departmentId) => (dispatch) => {
  const url = `${process.env.REACT_APP_TRUST_MANAGEMENT_SERVICE}/v1/permission-grant?department_id=${departmentId}&collaborator_id=${collaboratorId}`;
  const idToken = getIdToken();
  axios
    (oAuthRequest({url, method: 'GET'}))
    .then((resp) => {
      if (resp.status == 200 || resp.status == 304) {
        dispatch(onFetchPermissionGrants(resp.data));
      }
    })
    .catch((err) => {
      console.log(err);

      dispatch(
        onFetchPermissionGrants([
          {
            id: "b5f97c02-75b4-4c25-8fc5-3f582efe3b47",
            trust_group_id: "8d4d7810-a513-4956-876b-01c87efc04d6",
            permission_id: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
            collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
            department_id: "aea99816-277d-438d-b892-432066c40ca0",
            enabled: false,
          },
          {
            id: "96ad686a-6d26-4c9d-ba2f-0427db70e14f",
            trust_group_id: "8d4d7810-a513-4956-876b-01c87efc04d6",
            permission_id: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
            collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
            department_id: "aea99816-277d-438d-b892-432066c40ca0",
            enabled: false,
          },
          {
            id: "5dbb5cd4-67c7-46d7-b721-75fe3b3a9f47",
            trust_group_id: "8d4d7810-a513-4956-876b-01c87efc04d6",
            permission_id: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
            collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
            department_id: "aea99816-277d-438d-b892-432066c40ca0",
            enabled: false,
          },
          {
            id: "e597694b-6307-4ed4-89c1-f8b7ef11bcb3",
            trust_group_id: "8d4d7810-a513-4956-876b-01c87efc04d6",
            permission_id: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
            collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
            department_id: "aea99816-277d-438d-b892-432066c40ca0",
            enabled: false,
          },
          {
            id: "4adefc0c-34fc-4c43-bc82-b763b503c811",
            trust_group_id: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
            permission_id: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
            collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
            department_id: "aea99816-277d-438d-b892-432066c40ca0",
            enabled: true,
          },
          {
            id: "b816d318-4be5-40eb-986a-b92ed556f766",
            trust_group_id: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
            permission_id: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
            collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
            department_id: "aea99816-277d-438d-b892-432066c40ca0",
            enabled: true,
          },
          {
            id: "98bc2e69-a6e2-4fdc-9d79-7f9eada59613",
            trust_group_id: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
            permission_id: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
            collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
            department_id: "aea99816-277d-438d-b892-432066c40ca0",
            enabled: true,
          },
          {
            id: "c64b49b2-02ca-4f74-a046-3992df53fdad",
            trust_group_id: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
            permission_id: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
            collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
            department_id: "aea99816-277d-438d-b892-432066c40ca0",
            enabled: true,
          },
          {
            id: "4870ad08-c17d-41f5-9383-a223445cd88c",
            trust_group_id: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
            permission_id: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
            collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
            department_id: "aea99816-277d-438d-b892-432066c40ca0",
            enabled: true,
          },
          {
            id: "d8b4d5a7-3228-4f81-9f55-53c75a33c3bb",
            trust_group_id: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
            permission_id: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
            collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
            department_id: "aea99816-277d-438d-b892-432066c40ca0",
            enabled: true,
          },
          {
            id: "149af3cb-9312-403f-aa68-82c1b2056bb9",
            trust_group_id: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
            permission_id: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
            collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
            department_id: "aea99816-277d-438d-b892-432066c40ca0",
            enabled: true,
          },
          {
            id: "3f0450f5-2560-4773-b081-584de1180e0e",
            trust_group_id: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
            permission_id: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
            collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
            department_id: "aea99816-277d-438d-b892-432066c40ca0",
            enabled: true,
          },
          {
            id: "c48eec9e-f4bb-4877-bcf4-7cefb76bda46",
            trust_group_id: "3d30c4b4-e544-4060-9c96-5335687c090e",
            permission_id: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
            collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
            department_id: "aea99816-277d-438d-b892-432066c40ca0",
            enabled: true,
          },
          {
            id: "8754b6d2-1001-4651-bdbf-b31616a2960b",
            trust_group_id: "3d30c4b4-e544-4060-9c96-5335687c090e",
            permission_id: "3fa85f64-5717-4562-b3fc-2c963f66afa2",
            collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
            department_id: "aea99816-277d-438d-b892-432066c40ca0",
            enabled: true,
          },
          {
            id: "018db0c0-919f-43f8-b8df-8516d0847d03",
            trust_group_id: "3d30c4b4-e544-4060-9c96-5335687c090e",
            permission_id: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
            collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
            department_id: "aea99816-277d-438d-b892-432066c40ca0",
            enabled: true,
          },
          {
            id: "ef190cef-4c3a-45eb-9361-259b60202479",
            trust_group_id: "3d30c4b4-e544-4060-9c96-5335687c090e",
            permission_id: "3fa85f64-5717-4562-b3fc-2c963f66afa4",
            collaborator_id: "a898c8b0-3afc-456e-bf84-83ac73fa7e86",
            department_id: "aea99816-277d-438d-b892-432066c40ca0",
            enabled: false,
          },
        ])
      );
    });
};

export const updatePermissionGrants = (permissionGrantId, status) => (dispatch) => {
  const url = `${process.env.REACT_APP_TRUST_MANAGEMENT_SERVICE}/v1/permission-grant`;
  const idToken = getIdToken();
  let request = {
    url,
    method: "PUT",
    data: { enabled: status, id: permissionGrantId },
  };

  axios(oAuthRequest(request))
    .then((resp) => {
      if (resp.status == 200) {
        dispatch(fetchPermissionGrants(resp.data.collaborator_id, resp.data.department_id));
      }
    })
    .catch((err) => {
      console.log(err);

      dispatch(onUpdatePermissionGrants({}));
    });
};
