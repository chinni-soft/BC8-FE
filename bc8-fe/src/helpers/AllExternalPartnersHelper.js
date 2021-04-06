import React from "react";
import BasicChip from "../components/atoms/Chips/BasicChip";
import DarkChip from "../components/atoms/Chips/DarkChip";
import LightChip from "../components/atoms/Chips/LightChip";
import SemiDarkChip from "../components/atoms/Chips/SemiDarkChip";

export const getChip = (trustGroup) => {
  if (trustGroup.includes("100")) {
    return <LightChip label={trustGroup} />;
  } else if (trustGroup.includes("10000")) {
    return <BasicChip label={trustGroup} />;
  } else if (trustGroup.includes("30000") || trustGroup.includes("0000")) {
    return <SemiDarkChip label={trustGroup} />;
  } else {
    return <DarkChip label={trustGroup} />;
  }
};

export const getGroupedDomains = (trustGroups, domains) => {
  let grouped_data = [];

  if (trustGroups.length > 0 && domains.length > 0) {
    let trustGroupsMap = new Map();

    trustGroups.forEach((trustGroup) => {
      trustGroupsMap.set(trustGroup.id, trustGroup);
    });

    domains.forEach((eachDomain) => {
      const grouped_domain = eachDomain;
      const trustGroup = trustGroupsMap.get(grouped_domain.trustgroupId);
      console.log("trustGroup", trustGroup);
      if (trustGroup) {
        grouped_domain["group"] = trustGroup.displayName;
        grouped_data.push(grouped_domain);
      }
      console.log(grouped_domain);
    });
    // console.log()
  }

  return grouped_data;
};
