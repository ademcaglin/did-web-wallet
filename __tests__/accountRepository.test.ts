import AccountRepository from "../lib/accountRepository";
const Dexie = require("dexie");
Dexie.dependencies.indexedDB = require('fake-indexeddb')
Dexie.dependencies.IDBKeyRange = require('fake-indexeddb/lib/FDBKeyRange')
//require("fake-indexeddb/auto");

//Dexie.dependencies.indexedDB = indexedDB;

describe("accountRepository", () => {
  it("accountRepository error", async () => {
    var repo = new AccountRepository();
    await repo.save("ademcaglin", "Adem Çağlın");
    let item = await repo.getAccount();
    expect(item.username).toBe("ademcaglin");
  });
});
