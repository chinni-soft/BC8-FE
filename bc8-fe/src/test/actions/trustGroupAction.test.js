import { ON_FETCH_PERMISSIONS, ON_FETCH_TRUSTGROUPS, ON_FETCH_PERMISSION_GRANTS, ON_UPDATE_PERMISSION_GRANTS } from "../../constants";
import { onFetchPermissions, onFetchTrustGroups, onFetchPermissionGrants, onUpdatePermissionGrants } from '../../actions/trustGroupAction';

describe("trust group action", () => {
    const randomId = "87287386-9837968"
    const permissionGrant = { flag: true, id: randomId, permissionId: randomId, trustGroupId: randomId };
    it("test on fetch permissions action", () => {
        const permissionList = [{ name: "read", description: "can read", id: randomId }]
        expect(onFetchPermissions(permissionList)).toEqual({
            type: ON_FETCH_PERMISSIONS,
            permissions: permissionList
        });
    });

    it("test on fetch trust groups action", () => {
        const trsutGroupList = [{ name: "top100", id: randomId }]
        expect(onFetchTrustGroups(trsutGroupList)).toEqual({
            type: ON_FETCH_TRUSTGROUPS,
            trustGroups: trsutGroupList
        });
    });

    it("test on fetch permission grants action", () => {
        expect(onFetchPermissionGrants([permissionGrant])).toEqual({
            type: ON_FETCH_PERMISSION_GRANTS,
            permissionGrants: [permissionGrant]
        });
    });

    it("test on update permissions grants", () => {
        expect(onUpdatePermissionGrants(permissionGrant)).toEqual({
            type: ON_UPDATE_PERMISSION_GRANTS,
            permissionGrants: permissionGrant
        });
    });

});