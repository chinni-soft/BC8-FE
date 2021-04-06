import React from 'react';
import AllExternalPartnersTable from './AllExternalPartnersTable';
import '@testing-library/jest-dom/extend-expect';
import { AgGridReact } from 'ag-grid-react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
configure({adapter: new Adapter()});

jest.spyOn(console, 'error').mockImplementation(() => { });
jest.spyOn(console, 'warn').mockImplementation(() => { });

const grouped_domains = [
    {
        "id": "38933a52-ddbb-4dc5-a0f7-7fd39070eb89",
        "trustScore": 770,
        "trustgroupId": "1d0ed9f4-35b9-461f-9938-9c7cdf69c474",
        "address": "skyflow.com",
        "relationship": "Vendor",
        "group": "DO NOT TRUST"
    },
    {
        "id": "385bff99-7469-4744-bf5c-61a5b3b5f084",
        "trustScore": 750,
        "trustgroupId": "1d0ed9f4-35b9-461f-9938-9c7cdf69c474",
        "address": "zemoso.design",
        "relationship": "Vendor",
        "group": "DO NOT TRUST"
    },
    {
        "id": "2a9a195c-a3f9-47b3-85c1-1201070dd80f",
        "trustScore": 750,
        "trustgroupId": "1d0ed9f4-35b9-461f-9938-9c7cdf69c474",
        "address": "prekarilabs.com",
        "relationship": "Vendor",
        "group": "DO NOT TRUST"
    },
    {
        "id": "0299e8da-0827-4b4a-836c-05e8ed589cd1",
        "trustScore": 770,
        "trustgroupId": "1d0ed9f4-35b9-461f-9938-9c7cdf69c474",
        "address": "cleardin.com",
        "relationship": "Partner",
        "group": "DO NOT TRUST"
    },
    {
        "id": "b548ed06-83d2-4eca-9ae3-9e547cd84498",
        "trustScore": 850,
        "trustgroupId": "1d0ed9f4-35b9-461f-9938-9c7cdf69c474",
        "address": "otka.com",
        "relationship": "Customer",
        "group": "DO NOT TRUST"
    },
    {
        "id": "48a1bda8-b919-4d13-b0ab-3a7153b6c4d2",
        "trustScore": 799,
        "trustgroupId": "1d0ed9f4-35b9-461f-9938-9c7cdf69c474",
        "address": "sbwire.com",
        "relationship": "Vendor",
        "group": "DO NOT TRUST"
    },
    {
        "id": "5f77230f-3013-4c01-935d-2bf98706ab68",
        "trustScore": 800,
        "trustgroupId": "1d0ed9f4-35b9-461f-9938-9c7cdf69c474",
        "address": "ycombinator.com",
        "relationship": "Partner",
        "group": "DO NOT TRUST"
    },
    {
        "id": "ac1370b6-0ade-4dd5-8488-356d9b7cf2d0",
        "trustScore": 740,
        "trustgroupId": "1d0ed9f4-35b9-461f-9938-9c7cdf69c474",
        "address": "cdc.com",
        "relationship": "Vendor",
        "group": "DO NOT TRUST"
    },
    {
        "id": "44796dbf-c938-40ce-ac18-2023c589d1f1",
        "trustScore": 710,
        "trustgroupId": "1d0ed9f4-35b9-461f-9938-9c7cdf69c474",
        "address": "columbia.edu",
        "relationship": "Partner",
        "group": "DO NOT TRUST"
    },
    {
        "id": "b885428e-0313-4f1f-9b13-77bb6080515b",
        "trustScore": 730,
        "trustgroupId": "1d0ed9f4-35b9-461f-9938-9c7cdf69c474",
        "address": "4shared.com",
        "relationship": "Customer",
        "group": "DO NOT TRUST"
    },
    {
        "id": "e100117a-adcb-4eb7-b855-18c4c8aae357",
        "trustScore": 840,
        "trustgroupId": "1d0ed9f4-35b9-461f-9938-9c7cdf69c474",
        "address": "nba.com",
        "relationship": "Customer",
        "group": "DO NOT TRUST"
    },
    {
        "id": "9bd10894-b436-4212-a835-32ed4acb07a4",
        "trustScore": 830,
        "trustgroupId": "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
        "address": "ted.com",
        "relationship": "Partner",
        "group": "Top 100"
    }
]

const trustGroups = [
    {
        "id": "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
        "displayName": "Top 100",
        "description": "Top 100 domains that can be trusted"
    },
    {
        "id": "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
        "displayName": "Top 10000",
        "description": "Top 10000 domains that can be trusted"
    },
    {
        "id": "3d30c4b4-e544-4060-9c96-5335687c090e",
        "displayName": "Top 30000",
        "description": "Top 30000 domains that can be trusted"
    },
    {
        "id": "8d4d7810-a513-4956-876b-01c87efc04d6",
        "displayName": "DO NOT TRUST",
        "description": "Domains that cannot be trusted"
    }
]
const handleGroupChange = jest.fn();

const ensureGridApiHasBeenSet = (wrapper) => {
    return new Promise(function (resolve, reject) {
        (function waitForGridReady() {
            if (wrapper.api && wrapper.props.rowData.length) {
                resolve(wrapper);
                return;
            }
            setTimeout(waitForGridReady, 1000);
        })();
    });
};

describe('External partners table', ()=> {
    let externalPartnerComponent = null;
    let agGridReact = null;
    beforeEach( (done) =>{
        externalPartnerComponent = mount(
            <AllExternalPartnersTable
                data={grouped_domains}
                handleGroupChange={handleGroupChange}
                trustGroups={trustGroups}
            />
        );
        agGridReact = externalPartnerComponent.find(AgGridReact).instance();
        ensureGridApiHasBeenSet(agGridReact)
            .then(()=> done())
    })
    afterEach(() => {
        externalPartnerComponent.unmount();
        externalPartnerComponent = null;
        agGridReact =null;
    })

    test('Render without crashing', ()=>{
        expect(externalPartnerComponent.find('.ag-theme-alpine').exists()).toBeTruthy();
        expect(agGridReact.api).toBeTruthy();
    })

    test("test header cell value", ()=> {
        expect(agGridReact.gridOptions.rowData.length).toBe(grouped_domains.length);
        agGridReact.api.forEachNode((node, nodeInd) => {
            if(node.data){
                const nodeIndex = grouped_domains.findIndex(grouped_domain=> grouped_domain.id == node.data.id)
                Object.keys(node.data).forEach(colId => {
                    const cellValue = node.data[colId];
                    const testValue = grouped_domains[nodeIndex][colId];
                    expect(cellValue).toEqual(testValue);
                })
            }
        });
    });

    test("test grouped header cell value", ()=> {
        const groupedCellValue = trustGroups.map(trustGroup=>trustGroup.displayName);
        expect(agGridReact.gridOptions.rowData.length).toBe(grouped_domains.length);
        let groupCount = 0;
        agGridReact.api.forEachNode((node, nodeInd) => {
            if(!node.data){
                groupCount++;
                expect(node.group).toBeTruthy();
                expect(groupedCellValue.includes(node.groupData['ag-Grid-AutoColumn'])).toBeTruthy();
            }
        });
        const actualGroupCount = grouped_domains.map(data => data.trustgroupId);
        expect(groupCount).toBe(new Set(actualGroupCount).size);
    });
})
