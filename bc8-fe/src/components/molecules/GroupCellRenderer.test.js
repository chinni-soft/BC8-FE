import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import GroupCellRenderer from './GroupCellRenderer';

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

afterEach(cleanup);

const testHandleChange = jest.fn()
describe('GroupCellRenderer', () => {
    test('check if trust group is changed', () => {
       const { getByTestId } = render(<GroupCellRenderer value={'Top 100'} data={{domain_trust_group_id: "123"}} handleGroupChange={testHandleChange} trustGroups={trustGroups} />)
       const menu = getByTestId('group-menu');
       fireEvent.change(menu, {
           target: { value: "Top 10000" },
       });
       expect(testHandleChange).toBeCalled()
    });
});