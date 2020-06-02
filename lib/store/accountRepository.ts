import Dexie from "dexie";
import IAccount from "../models/IAccount";
import IAccountItem from "../viewmodels/IAccountItem";

export default class AccountRepository extends Dexie {
  accounts: Dexie.Table<IAccount, string> | any;

  constructor() {
    super("AccountRepository");
    this.version(1).stores({
      accounts: "id,selected,username,displayName,operations,publicKeys"
    });
    this.accounts = this.table("accounts");
  }

  async save(username: string, displayName: string): Promise<void> {
    await this.accounts.add({
      id: "xxx",
      selected: true,
      username: username,
      displayName: displayName,
      operations: []
    });
  }

  async getSelected(): Promise<IAccount | undefined> {
    let all: Array<IAccount> = await this.accounts.toArray();
    return all.find(x => x.id == "");
  }

  async getByUsername(username: string) {
    let item = await this.accounts
      .where("username")
      .equals(username)
      .first();
    return item!;
  }

  async getAll(): Promise<Array<IAccountItem>> {
    let all: Array<IAccount> = await this.accounts.toArray();
    return all.map(x => <IAccountItem>({
      username: x.username
    }));
  }
}
