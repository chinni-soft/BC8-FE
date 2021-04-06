import { SET_COLLABORATION } from "../constants";

export const setCollaboration = (payload) => {
  return {
    type: SET_COLLABORATION,
    payload,
  };
};