import React, { useEffect } from "react";
import Login from "../../components/organisms/Login/Login";
import LoginPageTemplate from '../../components/templates/LoginPageTemplate/LoginPageTemplate';

export default function LoginPage({onSuccess, onFailure}) {
  return (
    <div>
      <LoginPageTemplate body={<Login onSuccess={onSuccess} onFailure={onFailure}/>} />
    </div>
  );
}
