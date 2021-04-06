// Service calls actions will be here
import axios from "axios";
import { onFetchDomain } from "../../actions/domainAction";
import { getIdToken, oAuthRequest } from "../../helpers/UserHelper";

export const fetchDomains = (collaboratorId, departmentId) => (dispatch) => {
  const url = `${process.env.REACT_APP_DOMAIN_SERVICE}/v1/domain-trust-group?collaborator_id=${collaboratorId}&department_id=${departmentId}`;
  const idToken = getIdToken();
  axios
    (oAuthRequest({
      url,
      method: 'GET'
    }))
    .then((resp) => {
      if (resp.status == 200 || resp.status == 304) {
        dispatch(onFetchDomain(resp.data));
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(onFetchDomain([]));
    });
};
