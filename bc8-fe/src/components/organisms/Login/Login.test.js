import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Login from './Login';

const testLogin = jest.fn()
describe('Login', () => {
    test('check if authentication is working', () => {
        const {getByText} = render(<Login onSuccess={testLogin} />);
        expect(getByText('Login')).toBeDefined();
    });
});