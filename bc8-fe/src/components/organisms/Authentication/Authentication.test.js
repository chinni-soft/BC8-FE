import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import HomePage from '../../../pages/HomePage/HomePage';
import Authentication from './Authentication';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureMockStore from 'redux-mock-store';
import {initialState as appData} from '../../../reducers/ApplicationReducer';
import LoginPage from '../../../pages/LoginPage/LoginPage';

const middlewares = []
const mockStore = (state) => configureMockStore(middlewares)(state);

const renderWithProviders = (component, state) =>
  (<Provider store={mockStore(state)}>{component}</Provider>);

afterEach(cleanup);
jest.mock('@material-ui/core/Modal', () => ({
    __esModule: true,
default: (props) =>  <div>{props.open? "Access Enabled": "Access Not Enabled"}</div> ,
}));

const testLogin = jest.fn()
describe('Authentication', () => {
    test('check if login screen is loaded', () => {
        const {getByText} = render(renderWithProviders(<Authentication>
            <HomePage />
        </Authentication>, {
            userData: { isLoggedIn: false },
            appData: appData
          }));
        expect(getByText("Login")).toBeDefined()
    });
    test('check if  home page is loaded', () => {
        const {getByText} = render(renderWithProviders(<Authentication>
            <HomePage />
        </Authentication>, {
            userData: { isLoggedIn: true },
            appData: appData
          }));
        expect(getByText("Centralized Communication Command Center")).toBeDefined()
    });
});