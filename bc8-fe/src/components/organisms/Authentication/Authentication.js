import React, { useEffect } from 'react';
import LoginPage from '../../../pages/LoginPage/LoginPage';
import { useDispatch, useSelector } from "react-redux";
import HomePage from '../../../pages/HomePage/HomePage';
import { onLoggedIn, onLoggedOut } from '../../../actions/userAction';

const Authenticaton = (props) => {
    const dispatch = useDispatch();
    const loggedIn = useSelector(({userData}) => userData.isLoggedIn)

    useEffect(() => {
        const idToken = sessionStorage.getItem('idToken');
        if(idToken){
            dispatch(onLoggedIn());
        }
    }, [])

    const onSuccess = (response) => {
        if(response){
            sessionStorage.setItem('idToken', response.tokenId);
            dispatch(onLoggedIn());
        }
    }

    const onFailure = (response) => {
        console.log("unable to login", response);
    }

    return (loggedIn ? <HomePage /> : <LoginPage onSuccess={onSuccess} onFailure={onFailure} />);
}

export default Authenticaton;