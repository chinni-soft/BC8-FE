import React, { useEffect } from "react";
import TrustGroupsNavBar from "../../organisms/TrustGroupsNavBar/TrustGroupsNavBar";
import TrustGroupPermissionGrid from "../../organisms/TrustGroupPermissionGrid/TrustGroupPermissionGrid";
import TopPanelComponent from "../Top Panel Component/TopPanelComponent";
import { useDispatch, useSelector } from "react-redux";
import {addDepartment, fetchDepartments} from "../../../services/DepartmentService/DepartmentService";
import { fetchPermissions } from "../../../services/TrustGroupService/PermissionService";
import {addTrustGroup, fetchTrustGroups} from "../../../services/TrustGroupService/TrustGroupService";
import { fetchPermissionGrants } from "../../../services/TrustGroupService/PermissionGrantService";
import { updatePermissionGrants } from "../../../services/TrustGroupService/PermissionGrantService";
import { updateTrustGroupTab } from "../../../actions/tabAction";
import TrustedGroupTable from "../Tables/TrustedGroupTable/TrustedGroupTable";
import AllExternalPartnersView from "../../organisms/AllExternalPartnersView/AllExternalPartnersView";
import { ALL_EXTERNAL_PARTNERS, GOOGLE_COMMUNICATION_BASE } from "../../../constants";
import { fetchDomains } from "../../../services/DomainService/DomainService";
import { onDepartmentChange } from "../../../actions/departmentAction";
import { COLLABORATOR_ID } from "../../../constants";
export default function BaseComponent() {
  const dispatch = useDispatch();
  const permissions = useSelector((state) => state.appData.permissions);
  const trustgroups = useSelector((state) => state.appData.trustgroups);
  const permissionGrantMapping = useSelector((state) => state.appData.permissionGrantMapping);
  const selectedDepartment = useSelector((state) => state.appData.selectedDepartment);
  const selectedTrustGroupTab = useSelector((state) => state.appData.selectedTrustGroupTab);
  const domains = useSelector((state) => state.appData.domains);
  const departments = useSelector((state) => state.appData.departments);

  useEffect(() => {
    dispatch(fetchDepartments());
    dispatch(fetchPermissionGrants(COLLABORATOR_ID, selectedDepartment));
    dispatch(fetchPermissions(COLLABORATOR_ID));
    dispatch(fetchTrustGroups());
    dispatch(fetchDomains(COLLABORATOR_ID, selectedDepartment));
  }, []);

  const updatePermissionGrant = (permissionGrantId, status) => {
    dispatch(updatePermissionGrants(permissionGrantId, status));
  };

  const handleTabChange = (event, value) => {
    dispatch(updateTrustGroupTab(value));
    event.preventDefault();
  };

  function getTrustedGroupTableData(seletedTrustGroupTab) {
    const trustgroupId = selectedTrustGroupTab;
    return domains
      .filter((domain) => domain.trustgroupId === trustgroupId)
      .map((domain) => ({
        domain: domain.address,
        trustScore: domain.trustScore,
        relationship: domain.relationship,
      }));
  }
  const handleDepartmentChange = (index) => {
    if (departments.length > 0) {
      const departmentId = departments[index].value;
      dispatch(onDepartmentChange(departmentId));
      dispatch(fetchDomains(COLLABORATOR_ID, departmentId));
      dispatch(fetchPermissionGrants(COLLABORATOR_ID, departmentId));
    }
  };
  const handleCreateDepartment = (name) =>{
    dispatch(addDepartment(name));
  }

  const handleCreateTrustGroup = (name)=>{
    dispatch(addTrustGroup(name));
  }

  return (
    <div>
      <TrustGroupsNavBar handleTabChange={handleTabChange} value={selectedTrustGroupTab} trustgroups={trustgroups} handleCreateTrustGroup={handleCreateTrustGroup} />
      <TopPanelComponent handleDepartmentChange={handleDepartmentChange} departments={departments} handleCreateDepartment={handleCreateDepartment} />
      {selectedTrustGroupTab === GOOGLE_COMMUNICATION_BASE ? (
        <TrustGroupPermissionGrid
          trustgroups={trustgroups}
          permissions={permissions}
          permissionGrantMapping={permissionGrantMapping}
          updatePermissionGrant={updatePermissionGrant}
        />
      ) : selectedTrustGroupTab === ALL_EXTERNAL_PARTNERS ? (
        <AllExternalPartnersView trustgroups={trustgroups} domains={domains} />
      ) : (
        <TrustedGroupTable data={getTrustedGroupTableData(selectedTrustGroupTab)} />
      )}
    </div>
  );
}
