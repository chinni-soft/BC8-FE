import { ON_FETCH_DEPARTMENTS } from "../constants";
import { ON_DEPARTMENT_CHANGE } from "../constants";

export const onFetchDepartments = (departments) => {
  return {
    type: ON_FETCH_DEPARTMENTS,
    departments,
  };
};

export const onDepartmentChange = (departmentId) => {
  return {
    type: ON_DEPARTMENT_CHANGE,
    departmentId,
  };
};
