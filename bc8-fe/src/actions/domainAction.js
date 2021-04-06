import { FETCH_DOMAIN, SHOW_BACKDROP, UPDATE_DOMAIN } from '../constants';
import { ON_FETCH_DOMAIN } from "../constants";


export const fetchDomain = (payload) => {
    return {
        type: FETCH_DOMAIN,
        payload,
    };
};
export const onFetchDomain = (domains) => {
    return {
        type: ON_FETCH_DOMAIN,
        domains,
    };
};

export const onDomainUpdate = (payload) => {
    return {
        type: UPDATE_DOMAIN,
        payload,
    };
};

export const showBackdrop = (openBackdrop) => {
    return {
        type: SHOW_BACKDROP,
        payload: openBackdrop,
    };
};
