import IAccount from "../lib/models/IAccount";

describe("Model", () => {
  it("Model error", () => {
    let acc: IAccount = {
      username: "ademcaglin",
      displayName: "Adem Çağlın",
      operations: [
        {
          change: {
            id: "xxxx"
          },
          by: {
            key: "key-1",
            sig: "sig-xxxx"
          }
        }
      ]
    };
    expect(acc.operations.length).toBe(1);
  });
});
