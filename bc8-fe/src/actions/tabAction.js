import { UPDATE_TRUST_GROUP_TAB } from "../constants";

export const updateTrustGroupTab = (trustgroupId) => {
  return {
    type: UPDATE_TRUST_GROUP_TAB,
    trustgroupId,
  };
};
