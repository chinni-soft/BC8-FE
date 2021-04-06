import axios from "axios";
import { onFetchDepartments } from "../../actions/departmentAction";
import { getIdToken, oAuthRequest } from "../../helpers/UserHelper";
import {ADD_DEPARTMENT_ERROR} from "../../constants";


export const fetchDepartments = () => (dispatch) => {
  const url = `${process.env.REACT_APP_ORG_MANAGEMENT_SERVICE}/v1/departments`;
  const idToken = getIdToken();
  axios
    (oAuthRequest({
      url,
      method: 'GET'
    }))
    .then((resp) => {
      if (resp.status == 200) {
        dispatch(onFetchDepartments(resp.data));
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(onFetchDepartments([]));
    });
};

export const addDepartment = (name)=> (dispatch)=> {
  const url = `${process.env.REACT_APP_ORG_MANAGEMENT_SERVICE}/v1/departments`;
  let request = {
    url,
    method: "POST",
    data: { name: name },
  };
  axios(oAuthRequest(request))
      .then((resp) => {
        if (resp.status == 200) {
          dispatch(fetchDepartments());
        }
      })
      .catch((err) => {
        console.error(ADD_DEPARTMENT_ERROR, err);
      });
}
