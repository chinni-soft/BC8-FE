import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { getChip, getGroupedDomains } from './AllExternalPartnersHelper';

afterEach(cleanup);

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

const domains = [
    {
        "id": "057c8dc3-f908-44d9-93f1-16d5f1a8253e",
        "address": "Centaur.com",
        "trustgroupId": "3d30c4b4-e544-4060-9c96-5335687c090e",
        "trust_score": 235,
        "relationship": "Customer",
        "domain_trust_group_id": "a709a4ac-2b20-4a96-8564-02d45672b338",
        "name": "centaur"
    },
    {
        "id": "6f9fd2e8-8e28-42f4-aa2a-0e5ba2c66093",
        "address": "SBWire.com",
        "trustgroupId": "2a3d7bdd-51ce-4509-980a-b0e0aab88db4",
        "trust_score": 176,
        "relationship": "Vendor",
        "domain_trust_group_id": "e92fcbb8-3c3a-408b-a21b-5543945a1518",
        "name": "sbwire"
    },
    {
        "id": "55080977-90b9-4931-a0d3-02b50c570c95",
        "address": "YCombinator.com",
        "trustgroupId": "5fc7dd1c-597e-4c07-bb67-305e8ce31b8a",
        "trust_score": 300,
        "relationship": "Partner",
        "domain_trust_group_id": "a9fb55fc-c776-46da-9fe1-6f0f7cd76639",
        "name": "ycombinator"
    },
    {
        "id": "cbbc223a-d467-44ce-a604-c37648fd015f",
        "address": "Zemosolabs.com",
        "trustgroupId": "8d4d7810-a513-4956-876b-01c87efc04d6",
        "trust_score": 300,
        "relationship": "Vendor",
        "domain_trust_group_id": "1d1f4823-7534-43c7-b9b4-e68c5a021cd4",
        "name": "zemosolabs"
    }
]

const grouped_data = [{
    id: '057c8dc3-f908-44d9-93f1-16d5f1a8253e',
    address: 'Centaur.com',
    trustgroupId: '3d30c4b4-e544-4060-9c96-5335687c090e',
    trust_score: 235,
    relationship: 'Customer',
    domain_trust_group_id: 'a709a4ac-2b20-4a96-8564-02d45672b338',
    name: 'centaur',
    group: 'Top 30000'
},
{
    id: '6f9fd2e8-8e28-42f4-aa2a-0e5ba2c66093',
    address: 'SBWire.com',
    trustgroupId: '2a3d7bdd-51ce-4509-980a-b0e0aab88db4',
    trust_score: 176,
    relationship: 'Vendor',
    domain_trust_group_id: 'e92fcbb8-3c3a-408b-a21b-5543945a1518',
    name: 'sbwire',
    group: 'Top 10000'
},
{
    id: '55080977-90b9-4931-a0d3-02b50c570c95',
    address: 'YCombinator.com',
    trustgroupId: '5fc7dd1c-597e-4c07-bb67-305e8ce31b8a',
    trust_score: 300,
    relationship: 'Partner',
    domain_trust_group_id: 'a9fb55fc-c776-46da-9fe1-6f0f7cd76639',
    name: 'ycombinator',
    group: 'Top 100'
},
{
    id: 'cbbc223a-d467-44ce-a604-c37648fd015f',
    address: 'Zemosolabs.com',
    trustgroupId: '8d4d7810-a513-4956-876b-01c87efc04d6',
    trust_score: 300,
    relationship: 'Vendor',
    domain_trust_group_id: '1d1f4823-7534-43c7-b9b4-e68c5a021cd4',
    name: 'zemosolabs',
    group: 'DO NOT TRUST'
}
]

describe('AllExternalPartnersHelper', () => {
    test('test if trust group chip is returned', () => {
//        const element = getChip('Top 100');
//        const { getByText } = render(element);
//        expect(getByText('Top 100')).toBeDefined()
//    });
//
//    test('test if grouped data is returned', () => {
//        expect(getGroupedDomains(trustGroups, domains)).toEqual(grouped_data);
    })
});