import { UPDATE_TRUST_GROUP_TAB } from "../../constants";
import { updateTrustGroupTab } from '../../actions/tabAction'


describe("tab action", () => {
    it("test update trust group tab", () => {
        expect(updateTrustGroupTab("57829582758-9385-7835")).toEqual({
            type: UPDATE_TRUST_GROUP_TAB,
            trustgroupId: "57829582758-9385-7835"});
    });
});