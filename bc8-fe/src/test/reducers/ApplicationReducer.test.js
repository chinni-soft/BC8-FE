import {ApplicationReducer as reducer, initialState} from "../../reducers/ApplicationReducer";
import {onDomainUpdate, showBackdrop, onFetchDomain, fetchDomain} from '../../actions/domainAction'
import {onDepartmentChange, onFetchDepartments} from "../../actions/departmentAction";
import {setCollaboration} from "../../actions/collobartion";
import {updateTrustGroupTab} from "../../actions/tabAction";
import {
    onFetchPermissionGrants,
    onFetchPermissions,
    onFetchTrustGroups,
    onUpdatePermissionGrants
} from "../../actions/trustGroupAction";

describe("Application reducer", () => {

    const domain = {
        id: "8764785-2985884",
        trustScore: "567",
        trustgroupId: "8279552-845925",
        address: "design@zemosolabs.com",
        relationship: "vendor"
    }
    it("test update domain reducer", () => {
        const updatedDomain = {
            id: "8764785-2985884",
            trust_group_id: "8279552-847756",
        }
        const state = {...initialState, domains: [{...domain}]};
        const action = onDomainUpdate(updatedDomain);
        expect(reducer(state, action)).toEqual({
            ...state,
            domains: [{...domain, trustgroupId: "8279552-847756"}]
        });
    })

    it("test show backdrop reducer", () => {
        const state = {...initialState}
        const action = showBackdrop(true);
        expect(reducer(state, action)).toEqual({
            ...state,
            openBackdrop: true
        })
    })

    it("test fetch domain reducer", () => {
        const state = {...initialState}
        const action = fetchDomain([{...domain}]);
        expect(reducer(state, action)).toEqual([domain])
    })

    it("test in fetch domain", () => {
        const domainList = [{
            id: "8764785-2985884",
            trust_score: "567",
            trust_group_id: "8279552-845925",
            address: "design@zemosolabs.com",
            relationship: "vendor"
        }]
        const state = {...initialState}
        console.log(state)
        const action = onFetchDomain(domainList)
        expect(reducer(state, action)).toEqual({
            ...state,
            domains: [domain]
        });
    })

    it("test on flag fetch departments reducer", () => {
        const departmentList = [
            {
                id: "9827985-9845-8349",
                name: "sales"
            },
            {
                id: "9827985-9845-8567",
                name: "security"
            }]

        const expectedDepartmentList = [{
            value: "9827985-9845-8349",
            displayName: "sales"
        },
            {
                value: "9827985-9845-8567",
                displayName: "security"
            }]

        const state = {...initialState}
        const action = onFetchDepartments(departmentList)
        expect(reducer(state, action)).toEqual({
            ...state,
            departments: expectedDepartmentList
        });

    })

    it("test on department change reducer", () => {
        const id = "9827985-9845-8349"

        const state = {...initialState}
        const action = onDepartmentChange(id)
        expect(reducer(state, action)).toEqual({
            ...state,
            departmentId: id
        });

    })


    it("test set collaboration reducer", () => {
        const CollaboratorId = "9879-02959025"
        const state = {...initialState}
        const action = setCollaboration(CollaboratorId)
        expect(reducer(state, action)).toEqual({
            ...state,
            collaborator: {id: CollaboratorId}
        });
    })

    it("test update trust group tab reducer", () => {
        const id = "9879-02959025"
        const state = {...initialState}
        const action = updateTrustGroupTab(id)
        expect(reducer(state, action)).toEqual({
            ...state,
            selectedTrustGroupTab: id
        });
    })


    it("test on fetch permissions reducer", () => {
        const permissionList = [{
            name: "read",
            description: "can read",
            id: "987923750-9985555"
        }]
        const state = {...initialState}
        const action = onFetchPermissions(permissionList)
        expect(reducer(state, action)).toEqual({
            ...state,
            permissions: permissionList
        });
    })


    it("test on fetch trust groups reducer", () => {

        const departmentList = [{
            id: "9827985-9845-8349",
            name: "top100"
        },
            {
                id: "9827985-9845-8567",
                name: "top10000"
            }]

        const expectedDepartmentList = [{
            id: "9827985-9845-8349",
            displayName: "top100"
        },
            {
                id: "9827985-9845-8567",
                displayName: "top10000"
            }]

        const state = {...initialState}
        const action = onFetchTrustGroups(departmentList)
        expect(reducer(state, action)).toEqual({
            ...state,
            trustgroups: expectedDepartmentList
        });
    })

    it("test on fetch permission grants reducer", () => {
        const permissionGrantList = [{
            id: "987923750-9985555",
            permission_id: "98495639-98379869",
            trust_group_id: "983893905-0980484",
            enabled: true
        }]

        const expectedPermissionGrantList = [{
            id: "987923750-9985555",
            permissionId: "98495639-98379869",
            trustgroupId: "983893905-0980484",
            flag: true
        }]
        const state = {...initialState}
        const action = onFetchPermissionGrants(permissionGrantList)
        expect(reducer(state, action)).toEqual({
            ...state,
            permissionGrantMapping: expectedPermissionGrantList
        });
    })

    it("test on update permission grants reducer", () => {
        const permissionGrantList = [{
            id: "987923750-9985555",
            permissionId: "98495639-98379869",
            trustgroupId: "983893905-0980484",
            flag: true
        }]
        const updatedList = {
            id: "987923750-9985555",
            enabled: false
        }
        const expectedPermissionGrantList = [{
            id: "987923750-9985555",
            permissionId: "98495639-98379869",
            trustgroupId: "983893905-0980484",
            flag: false
        }]
        const state = {...initialState, permissionGrantMapping: permissionGrantList}
        const action = onUpdatePermissionGrants(updatedList)
        expect(reducer(state, action)).toEqual({
            ...state,
            permissionGrantMapping: expectedPermissionGrantList
        });
    })

})