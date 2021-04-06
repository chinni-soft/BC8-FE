import {ON_FETCH_DEPARTMENTS, ON_DEPARTMENT_CHANGE} from "../../constants";
import {onFetchDepartments, onDepartmentChange} from "../../actions/departmentAction"

describe("department action", () => {
    const randomId = "9276857-9857";

    it("test on fetch departments", () => {
        const departmentList = [{name: "sales", id: randomId}]
        expect(onFetchDepartments(departmentList)).toEqual({
            type: ON_FETCH_DEPARTMENTS,
            departments: departmentList
        });
    });

    it("test on department change", () => {
        expect(onDepartmentChange(randomId)).toEqual({
            type: ON_DEPARTMENT_CHANGE,
            departmentId: randomId
        });
    });
});