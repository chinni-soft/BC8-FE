import React from 'react';
import CreateModalComponent from "./CreateModalComponent";
import { render, cleanup, fireEvent } from '@testing-library/react';

afterEach(cleanup);
const handleClose = jest.fn();
const handleCreateAction = jest.fn();

describe('Create Modal component', ()=> {

    test('Check if modal open', ()=> {
        const title = "Create trust group for the organization"
        const { getByText,getByRole, getByTestId } = render(<CreateModalComponent open={true} modalFor="Trust Group"
                                         title={title}
                                         handleClose={handleClose}
                                         handleCreateAction={handleCreateAction}/>)
        expect(getByRole('dialog')).toBeDefined();
        expect(getByText('Create Trust Group')).toBeDefined();
        const inputField = getByTestId('createModalInput');
        fireEvent.change(inputField, { target: { value: 'Top 50000' } });
        expect(inputField.value).toBe('Top 50000');
        expect(getByText('Create Trust Group')).toBeDefined();
    })

    test('Check if modal, do not create for empty input field', ()=> {
        const title = "Create trust group for the organization"
        const { getByText,getByRole, getByTestId } = render(<CreateModalComponent open={true} modalFor="Trust Group"
                                                                  title={title}
                                                                  handleClose={handleClose}
                                                                  handleCreateAction={handleCreateAction}/>)
        const inputField = getByTestId('createModalInput');
        fireEvent.change(inputField, { target: { value: '' } });
        expect(inputField.value).toBe('');
        fireEvent.click(getByText('Create'));
        expect(handleClose).toBeCalledTimes(0);
        expect(getByRole('dialog')).toBeDefined();
        expect(getByText('Create Trust Group')).toBeDefined();
    })

    test('Check if modal, create for valid input field', ()=> {
        const title = "Create trust group for the organization"
        const { getByText, getByTestId } = render(<CreateModalComponent open={true} modalFor="Trust Group"
                                                      title={title}
                                                      handleClose={handleClose}
                                                      handleCreateAction={handleCreateAction}/>)
        const inputField = getByTestId('createModalInput');
        fireEvent.change(inputField, { target: { value: 'Top 50000' } });
        expect(inputField.value).toBe('Top 50000');
        fireEvent.click(getByText('Create'));
        expect(handleClose).toBeCalledTimes(1);
    })

    test('Check if modal, not available for open = false', ()=> {
        const handleClose = jest.fn();
        const handleCreateAction = jest.fn();
        const title = "Create trust group for the organization"
        const { queryByRole,queryByText } = render(<CreateModalComponent open={false} modalFor="Trust Group"
                                                       title={title}
                                                       handleClose={handleClose}
                                                       handleCreateAction={handleCreateAction}/>)
        expect(queryByRole('dialog')).toBeNull();
        expect(queryByText('Create Trust Group')).toBeNull();
    })

})