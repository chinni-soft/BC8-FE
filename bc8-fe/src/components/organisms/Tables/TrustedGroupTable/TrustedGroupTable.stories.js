import React from "react";
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import TrustedGroupTable from "./TrustedGroupTable";

storiesOf("Organisms/Basic Table", module)
    .addDecorator(withKnobs)
    .add("Table", ()=>{
        const testRowData = [
            {
                domain: "skyflow.com",
                trustScore: 770,
                relationship: "Vendor"
            },
            {
                domain: "zemosolabs.com",
                trustScore: 750,
                relationship: "Vendor"
            },
            {
                domain: "pekarilabs.com",
                trustScore: 760,
                relationship: "Vendor"
            },
            {
                domain: "cleardin.com",
                trustScore: 770,
                relationship: "Partner"
            },
            {
                domain: "otka.com",
                trustScore: 850,
                relationship: "Customer"
            },
            {
                domain: "sbwire.com",
                trustScore: 760,
                relationship: "Vendor"
            },
            {
                domain: "ycombinator.com",
                trustScore: 740,
                relationship: "Partner"
            },
            {
                domain: "cdc.com",
                trustScore: 760,
                relationship: "Vendor"
            },
            {
                domain: "columbia.com",
                trustScore: 710,
                relationship: "Partner"
            },
            {
                domain: "4shared.com",
                trustScore: 730,
                relationship: "Customer"
            },
            {
                domain: "nba.com",
                trustScore: 840,
                relationship: "Customer"
            }
        ]
        return(
            <TrustedGroupTable data={testRowData} />
        )
    })