import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import CollaborationPlatform from './CollaborationPlatform'

afterEach(cleanup);
const testHandleClick = jest.fn()
describe('collaboration Platform', () => {
    test('check click of add button', () => {
        const { getByText } = render(<CollaborationPlatform
            variant1="contained"
            value1="Add"
            variant2="outlined"
            value2="Show Preview"
            name="Google Suite"
            enabled={true}
            id="collaborationId"
            setCollaboration={testHandleClick}/>)
        expect(getByText("Show Preview")).toBeDefined();
        let button = getByText("Add")
        fireEvent.click(button)
        expect(testHandleClick).toBeCalledWith("collaborationId");
    });
});