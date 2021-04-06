import React from "react";
import { storiesOf } from "@storybook/react";
import DarkChip from "./DarkChip";
import SemiDarkChip from "./SemiDarkChip";
import BasicChip from "./BasicChip";
import LightChip from "./LightChip";
import {text, withKnobs} from "@storybook/addon-knobs";

storiesOf("atoms/Chips", module)
    .addDecorator(withKnobs)
    .add("Dark", () => {
        const label = text("label","DO NOT TRUST");
        return (
            <DarkChip label={label} />
        )
    })
    .add("Semi Dark", () => {
            const label = text("label","Top 30000");
            return (
                <SemiDarkChip label={label} />
            )
    })
    .add("Basic", () => {
            const label = text("label","Top 10000");
            return (
                <BasicChip label={label} />
            )
    })
    .add("Light", () => {
            const label = text("label","Top 100");
            return (
                <LightChip label={label} />
            )
    })

