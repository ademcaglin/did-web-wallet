import React from "react";
import SignIn from "../components/SignIn";
import useAccount from "../lib/useAccount";

export default function Create() {
    useAccount("/", true);
    return (
        <SignIn />
    );
}
