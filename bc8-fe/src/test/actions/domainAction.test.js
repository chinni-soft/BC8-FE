import { FETCH_DOMAIN, SHOW_BACKDROP, UPDATE_DOMAIN, ON_FETCH_DOMAIN } from '../../constants';
import { fetchDomain, onFetchDomain, onDomainUpdate, showBackdrop } from '../../actions/domainAction';


describe("domain action", () => {
    const domain = {
        id: "8764785-2985884",
        trust_score: "567",
        trust_group_id: "8279552-845925",
        address: "design@zemosolabs.com",
        relationship: "vendor"
    }
    it("test fetch domain", () => {
        expect(fetchDomain("fetch domain")).toEqual({
            type: FETCH_DOMAIN,
            payload: "fetch domain"
        });
    });

    it("test on fetch domain", () => {
        expect(onFetchDomain([{ domain }])).toEqual({
            type: ON_FETCH_DOMAIN,
            domains: [{ domain }]
        });
    });

    it("test update domain", () => {
        expect(onDomainUpdate(domain)).toEqual({
            type: UPDATE_DOMAIN,
            payload: domain
        });
    });

    it("test show backdrop", () => {
        expect(showBackdrop(true)).toEqual({
            type: SHOW_BACKDROP,
            payload: true
        });
    });
});