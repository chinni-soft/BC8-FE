import React from "react";
import AllExternalPartnersTable from "../Tables/AllExternalPartnersTable/AllExternalPartnersTable";
import { useDispatch, useSelector } from "react-redux";
import { updateDomain } from "../../../services/domainService";
import { getGroupedDomains } from "../../../helpers/AllExternalPartnersHelper";
import Loader from "../../atoms/Loader/Loader";

const AllExternalPartnersView = (props) => {
  // const trustGroups = useSelector(({appData}) => appData.trustgroups);
  // const domains = useSelector(({appData}) => appData.domains);
  const openBackdrop = useSelector(({ appData }) => appData.openBackdrop);
  const trustGroups = props.trustgroups;
  const domains = props.domains;
  const dispatch = useDispatch();

  console.log("trustgroups", trustGroups);
  console.log("domains", domains);
  const grouped_domains = getGroupedDomains(trustGroups, domains);
  console.log("grouped_domains", grouped_domains);
  const handleGroupChange = (id, trust_group_id) => {
    dispatch(updateDomain(id, trust_group_id));
  };

  return (
    <React.Fragment>
      <AllExternalPartnersTable
        data={grouped_domains}
        handleGroupChange={handleGroupChange}
        trustGroups={trustGroups}
      />
      <Loader open={openBackdrop} />
    </React.Fragment>
  );
};

export default AllExternalPartnersView;
