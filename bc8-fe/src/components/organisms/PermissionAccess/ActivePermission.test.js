import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ActivePermission from './ActivePermission'

afterEach(cleanup);
jest.mock('@material-ui/core/Modal', () => ({
    __esModule: true,
default: (props) =>  <div>{props.open? "Access Enabled": "Access Not Enabled"}</div> ,
}));
describe('Active Permissions', () => {
    test('check active permissions page', () => {
        const { getByText} = render(<ActivePermission></ActivePermission>)
        expect(getByText("No active permissions")).toBeDefined();
        let button = getByText("Enable Access")
        fireEvent.click(button)
        expect(getByText("Access Enabled")).toBeDefined();
    });
});