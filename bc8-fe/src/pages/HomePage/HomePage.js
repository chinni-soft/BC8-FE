import React, { useEffect } from "react";
import TableScreenTemplate from "../../components/templates/TableScreenTemplate/TableScreenTemplate";
import TopNavigationBar from "../../components/organisms/TopNavigationBar/TopNavigationBar";
import SideNavigationBar from "../../components/organisms/SideNavigationBar/SideNavigationBar";
import BaseComponent from "../../components/organisms/BaseComponent/BaseComponent";
import BodyContainer from "../../components/organisms/Body/BodyContainer";
import { useDispatch, useSelector } from "react-redux";
import { onLoggedOut } from "../../actions/userAction";

export default function HomePage(props) {
  const dispatch = useDispatch();

  const onLogoutSuccess = () => {
    sessionStorage.setItem('idToken', undefined);
    dispatch(onLoggedOut());
  }

  return (
    <div>
      <TableScreenTemplate header={<TopNavigationBar />} sidebar={<SideNavigationBar onLogoutSuccess={onLogoutSuccess} />} body={<BodyContainer />} />
    </div>
  );
}
