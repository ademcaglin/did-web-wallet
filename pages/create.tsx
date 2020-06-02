import React from "react";
import SignIn from "../components/SignIn";
import useRedirectToHome from "../lib/useRedirectToHome";

export default function Create() {
    useRedirectToHome();
    return (
        <SignIn />
    );
}
