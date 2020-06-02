import { useEffect, useContext } from "react";
import Router from 'next/router';
import { AppContext } from "../context";
export default (redirectTo: string, redirectIfFound: boolean) => {
  const { state } = useContext(AppContext);
  useEffect(() => {
    async function init() {
      let hasAccount = state && state.users.length !== 0;
      if ((hasAccount && redirectIfFound) || (!hasAccount && !redirectIfFound)) {
        Router.push(redirectTo)
      }
    }
    init();
  }, [redirectTo, redirectIfFound, state]);
};
