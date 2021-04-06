import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

jest.mock('../../components/organisms/Login/Login', () => ({
    __esModule: true,
default: (props) =>  <div onClick={() => props.onSuccess({idToken: 'abc'})}>{'Login'}</div> ,
}));

const testLogin = jest.fn()
describe('LoginPage', () => {
    test('check if login is success', () => {
        const {getByText} = render(<LoginPage onSuccess={testLogin}/>);
        fireEvent.click(getByText('Login'));
        expect(testLogin).toBeCalledTimes(1);
    });
});