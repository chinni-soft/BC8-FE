import React from "react";
import { storiesOf } from "@storybook/react";
import {boolean, withKnobs} from "@storybook/addon-knobs";
import Loader from "./Loader";

storiesOf("atoms/Loader", module)
    .addDecorator(withKnobs)
    .add("Lottie Loader", () => (<Loader open={boolean("open", true)}/>))