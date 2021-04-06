import axios from "axios";
import { onFetchPermissions } from "../../actions/trustGroupAction";
import { getIdToken, oAuthRequest } from "../../helpers/UserHelper";

export const fetchPermissions = (collaboratorId) => (dispatch) => {
  const url = `${process.env.REACT_APP_TRUST_MANAGEMENT_SERVICE}/v1/permissions?collaborator_id=${collaboratorId}`;
  console.log("lasfdk: ", oAuthRequest({url}))
  axios(oAuthRequest({url, method: 'GET'}))
    .then((resp) => {
      if (resp.status == 200) {
        dispatch(onFetchPermissions(resp.data));
      }
    })
    .catch((err) => {
      console.log(err);

      dispatch(
        onFetchPermissions([
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
        ])
      );
    });
};
