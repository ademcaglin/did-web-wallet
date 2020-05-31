import React, { useState, useEffect } from "react";
import AccountRepository from "./accountRepository";
import Router from 'next/router';
import IAccount from "./models/IAccount";
import { CreateModel } from "./viewmodels/CreateModel";
const repo = new AccountRepository();
export default (redirectTo: string, redirectIfFound: boolean): [IAccount | undefined, (model: CreateModel) => Promise<void>] => {
  const [account, setAccount] = useState<IAccount | undefined>(undefined);
  useEffect(() => {
    async function init() {
      let account = await repo.getSelected();

      if (account) {
        setAccount(account);
      }
      if ((account && redirectIfFound) || (!account && !redirectIfFound)) {
        Router.push(redirectTo)
      }
    }
    init();
  }, [redirectTo, redirectIfFound, setAccount]);

  async function createAccount(model: CreateModel) {
    let repo = new AccountRepository();
    await repo.save(model.username, model.displayName);
    let account = await repo.getSelected();
    setAccount(account);
  }
  return [account, createAccount];
};
