export default () => {
  // get first change validate it with signature of id(public_key)
  // get first valid signature of change from anchor dlt
  // if has sig 
  const data = {
    id: "did:peer:0:keyhex",
    operations: [
      {
        change: {
          id: "hash of keyhex",
          publicKey: [
            {
              id: "keys-1xxxxxxxxxxxxxxxxxxx",//credential id
              clientDataJSON: "",
              attestationObject: "",
              role: "admin" //"admin", "user"
            }
          ]
        },
        by: {
          key: "keys-0",
          signature: "ArrayBuffer(70)"
        }
      },
      {
        change: {
          id: "hash of previous id",
          publicKey: [
            {
              id: "keys-2xxxxxxxxxxxxxxxxxxxxxxx",
              clientDataJSON: "",
              attestationObject: "",
              role: "user" //"admin", "user"
            }
          ]
          //deleted: ["keys-0"]
        },
        by: {
          key: "keys-1xxxxxxxxxxxxxxxxxxx",
          authenticatorData: "ArrayBuffer(191)",
          clientDataJSON: "ArrayBuffer(118)",
          signature: "ArrayBuffer(70)"
        }
      }
    ],
    // proof of change is not latest
    anchors: [
      {
        id: "DID",
        changeId: "DID",//added key-1
        key: "keys-1",
        authenticatorData: "ArrayBuffer(191)",
        clientDataJSON: "ArrayBuffer(118)",
        signature: "ArrayBuffer(70)"
      },
      {
        id: "DID",
        changeId: "hash of did",
        by: "key-1",//added key-2
        sig: ""
      },
      {
        id: "DID",
        changeId: "hash2 of did",
        by: "key-2",//added key-2
        sig: ""
      }
    ]
  };
  return "";
}