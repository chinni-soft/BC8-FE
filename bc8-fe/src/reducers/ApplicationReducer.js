import {
  FETCH_DOMAIN,
  UPDATE_DOMAIN,
  SET_COLLABORATION,
  SHOW_BACKDROP,
  ON_FETCH_DEPARTMENTS,
  ON_FETCH_PERMISSIONS,
  ON_FETCH_TRUSTGROUPS,
  ON_FETCH_PERMISSION_GRANTS,
  ON_DEPARTMENT_CHANGE,
  UPDATE_TRUST_GROUP_TAB,
  ON_FETCH_DOMAIN,
  GOOGLE_COMMUNICATION_BASE, ON_UPDATE_PERMISSION_GRANTS
} from "../constants";


// All services based reducer should be here. Non services based (basic) reducer, you can put that in separate reducer files
export const initialState = {
  departments: [
    {
      value: "599ca559-e7ea-4f2d-9a71-b78819d3f9a7",
      displayName: "Base Template",
    },
  ],
  trustgroups: ["initial Value "],
  domains: [],
  domainMapping: {},
  permissions: [],
  permissionGrantMapping: [],
  collaborator: {},
  openBackdrop: false,
  selectedDepartment: "599ca559-e7ea-4f2d-9a71-b78819d3f9a7", //BASE-TEMPLATE
  selectedTrustGroupTab: GOOGLE_COMMUNICATION_BASE,
};

export const ApplicationReducer = (state = initialState, action) => {
  switch (action.type) {
    // These are just example, change it according to the requirements.
    case UPDATE_DOMAIN: {
      let updated_domain = action.payload;
      let updated_domains = [...state.domains];
      console.log("updated domain: before", updated_domains, updated_domain);
      updated_domains.forEach((domain, index) => {
        if (domain.id === updated_domain.id) {
          updated_domains[index].trustgroupId = updated_domain.trust_group_id;
        }
      });
      console.log("updated domain: ", updated_domains)
      return { ...state, domains: updated_domains };
    }
    case SHOW_BACKDROP: {
      return { ...state, openBackdrop: action.payload };
    }
    case FETCH_DOMAIN:
      return action.payload;
    case ON_FETCH_DEPARTMENTS: {
      const data = action.departments;
      const departmentList = data.map((department) => ({
        displayName: department.name,
        value: department.id,
      }));
      return { ...state, departments: departmentList };
    }
    case ON_DEPARTMENT_CHANGE: {
      return { ...state, departmentId: action.departmentId };
    }

    case UPDATE_TRUST_GROUP_TAB: {
      return { ...state, selectedTrustGroupTab: action.trustgroupId };
    }
    case ON_FETCH_DOMAIN: {
      const data = action.domains;
      console.log("alksjdf: ", data);
      const domains = data.map((domain) => ({
        id: domain.id,
        trustScore: domain.trust_score,
        trustgroupId: domain.trust_group_id,
        address: domain.address,
        relationship: domain.relationship,
      }));
      return { ...state, domains: domains };
    }
    case ON_FETCH_PERMISSIONS: {
      const data = action.permissions;
      const permissionList = data.map((permission) => ({
        name: permission.name,
        description: permission.description,
        id: permission.id,
      }));
      return { ...state, permissions: permissionList };
    }
    case ON_FETCH_TRUSTGROUPS: {
      const data = action.trustGroups;
      const trustGroupList = data.map((trustGroup) => ({
        displayName: trustGroup.name,
        id: trustGroup.id,
      }));
      return { ...state, trustgroups: trustGroupList };
    }
    case ON_FETCH_PERMISSION_GRANTS: {
      const data = action.permissionGrants;
      const permissionGrantList = data.map((permissionGrant) => ({
        flag: permissionGrant.enabled,
        id: permissionGrant.id,
        permissionId: permissionGrant.permission_id,
        trustgroupId: permissionGrant.trust_group_id,
      }));
      return { ...state, permissionGrantMapping: permissionGrantList };
    }
    case ON_UPDATE_PERMISSION_GRANTS: {
      const data = action.permissionGrants;
      const permissionMappings = [...state.permissionGrantMapping];
      permissionMappings.forEach((permission) => {
        if(permission.id === data.id){
          permission.flag = data.enabled;
        }
      })
      return { ...state, permissionGrantMapping: permissionMappings};
    }
    case SET_COLLABORATION: {
      return { ...state, collaborator: { id: action.payload } };
    }
    default:
      return state;
  }
};
