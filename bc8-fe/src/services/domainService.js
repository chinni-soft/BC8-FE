// Service calls actions will be here
import axios from "axios";
import {fetchDomain, onDomainUpdate, showBackdrop} from "../actions/domainAction";
import { getIdToken, oAuthRequest } from "../helpers/UserHelper";

// This is just an example, in real scenario, change the apis endpoint and modify accordingly
export const fetchDomains = (collaboratorId) => (dispatch) => {
    const url = `http://localhost:3004/domains?id=${collaboratorId}`;
    axios.get(url)
        .then(resp=>{
            if(resp.status == 200){
                // This dispatch will trigger the FETCH_DOMAIN reducer with the specified payload
                dispatch(fetchDomain(resp.data));

            }
        })
        .catch(err=>{
            console.log(err);
            dispatch(fetchDomain([]));
        })
}

export const updateDomain = (id, trust_group_id) => (dispatch) => {
    dispatch(showBackdrop(true))
    const url = `${process.env.REACT_APP_DOMAIN_SERVICE}/v1/domain-trust-group`
    axios(oAuthRequest({
        url,
        method: 'PUT',
        data: {id, trust_group_id}
    }))
        .then(response => {
            dispatch(onDomainUpdate(response.data));
            dispatch(showBackdrop(false));
        }).catch(err=>{
            console.log(err);
            dispatch(showBackdrop(false));
        })
}