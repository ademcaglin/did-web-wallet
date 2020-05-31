import IOperation from "./IOperation";
import IAccountPublicKey from "./IAccountPublicKey";

export default interface IAccount {
  id: string,
  username: string;
  displayName: string;
  operations: Array<IOperation>; 
  publicKeys?: Array<IAccountPublicKey>;
  syncUri?: string;
  token: string;
}
