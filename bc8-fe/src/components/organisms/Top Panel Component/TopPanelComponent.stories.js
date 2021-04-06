import React from "react";
import {storiesOf} from "@storybook/react";
import TopPanelComponent from "./TopPanelComponent";
import {action} from "@storybook/addon-actions";

const departments = [{
    displayName: 'Base Template',
    value: '1'
},
{
    displayName: 'Sales',
    value: '2'
},
{
    displayName: 'legal',
    value: '3'
},
{
    displayName: 'finance',
    value: '4'
}]

storiesOf("Organisms/Top Panel", module)
    .add("Top Panel Component", () => {
        return (
            <TopPanelComponent departments={departments} handleDepartmentChange={action("handleDepartmentChange Triggered")} />
        )
    })

