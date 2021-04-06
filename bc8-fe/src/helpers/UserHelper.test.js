import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { getIdToken, oAuthRequest } from './UserHelper';

afterEach(cleanup);

const URL = `http://localhost:8080/v1/domain-trust-group`;
const TOKEN = 'token';

const requestMock = { url: URL,
method: 'PUT',
headers: { Authorization: `Bearer ${TOKEN}` } };
sessionStorage.setItem('idToken', TOKEN);

describe('UserHelper', () => {
    test('test onAuthRequest helper method', () => {
        const url = URL;
        const request = oAuthRequest({
            url,
            method: 'PUT'
        })
        expect(request).toEqual(requestMock);
    });

    test('test getIdToken method', () => {
        expect(getIdToken()).toEqual(TOKEN);
        sessionStorage.removeItem('idToken')
    })
});