import React from 'react';
import GoogleLogin from 'react-google-login';
import { CLIENT_ID } from '../../../constants';

const Login = ({onSuccess, onFailure}) => {

    return (<GoogleLogin
        clientId={CLIENT_ID}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
    />);
}

export default Login;
