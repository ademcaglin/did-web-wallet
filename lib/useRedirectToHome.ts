import { useEffect, useContext } from "react";
import Router from 'next/router';
import { AppContext } from "./context";
export default () => {
  const { state } = useContext(AppContext);
  useEffect(() => {
    async function init() {
      let hasAccount = state && state.users.length !== 0;
      if (hasAccount) {
        Router.push("/");
      }
    }
    init();
  }, [state]);

};
