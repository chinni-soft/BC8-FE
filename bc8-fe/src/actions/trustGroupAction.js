import { ON_FETCH_PERMISSIONS } from "../constants";
import { ON_FETCH_TRUSTGROUPS } from "../constants";
import { ON_FETCH_PERMISSION_GRANTS } from "../constants";
import { ON_UPDATE_PERMISSION_GRANTS } from "../constants";

export const onFetchPermissions = (permissions) => {
  return {
    type: ON_FETCH_PERMISSIONS,
    permissions,
  };
};
export const onFetchTrustGroups = (trustGroups) => {
  return {
    type: ON_FETCH_TRUSTGROUPS,
    trustGroups,
  };
};
export const onFetchPermissionGrants = (permissionGrants) => {
  return {
    type: ON_FETCH_PERMISSION_GRANTS,
    permissionGrants,
  };
};
export const onUpdatePermissionGrants = (permissionGrants) => {
  return {
    type: ON_UPDATE_PERMISSION_GRANTS,
    permissionGrants,
  };
};
