import { useEffect, useState } from "react";
import Router from 'next/router';
import { get } from "idb-keyval";
import { State } from "./types/State";


export default () => {
    const [state, setState] = useState("loading");
    async function init() {
        let persistedState = await get<State>("userState");
        let hasPersistedAccount = persistedState && persistedState.users.length !== 0;
        if (!hasPersistedAccount) {
            setState("no_account");
            Router.push("/create");
        }else{
            setState("account_exists");
        }
    }
    useEffect(() => {
        init();
    }, []);

    return state;
};
