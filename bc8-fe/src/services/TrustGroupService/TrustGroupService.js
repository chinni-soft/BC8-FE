import axios from "axios";
import { onFetchTrustGroups } from "../../actions/trustGroupAction";
import { getIdToken, oAuthRequest } from "../../helpers/UserHelper";
import { ADD_TRUST_GROUP_ERROR } from "../../constants";

export const fetchTrustGroups = () => (dispatch) => {
  const url = `${process.env.REACT_APP_TRUST_MANAGEMENT_SERVICE}/v1/trust-groups`;
  const idToken = getIdToken();
  axios(oAuthRequest({ url, method: "GET" }))
    .then((resp) => {
      if (resp.status == 200) {
        dispatch(onFetchTrustGroups(resp.data));
      }
    })
    .catch((err) => {
      console.log(err);

      dispatch(
        onFetchTrustGroups([
          {
            id: "8d4d7810-a513-4956-876b-01c87efc04d6",
            name: "DO NOT TRUST",
            description: "Domains that cannot be trusted",
          },
          {
            id: "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
            name: "Top 100",
            description: "Top 100 domains that can be trusted",
          },
          {
            id: "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
            name: "Top 10000",
            description: "Top 10000 domains that can be trusted",
          },
          {
            id: "3d30c4b4-e544-4060-9c96-5335687c090e",
            name: "Top 30000",
            description: "Top 30000 domains that can be trusted",
          },
        ])
      );
    });
};
export const addTrustGroup = (name) => (dispatch) => {
  const url = `${process.env.REACT_APP_TRUST_MANAGEMENT_SERVICE}/v1/trust-groups`;
  let request = {
    url,
    method: "POST",
    data: { name: name },
  };
  axios(oAuthRequest(request))
    .then((resp) => {
      if (resp.status == 200) {
        dispatch(fetchTrustGroups());
      }
    })
    .catch((err) => {
      console.error(ADD_TRUST_GROUP_ERROR, err);
    });
};
