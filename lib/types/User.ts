import { AccountPublicKey } from "./AccountPublicKey";
import { Operation } from "./Operation";
export type User = {
  id: string,
  username: string;
  displayName: string;
  operations: Array<Operation>;
  publicKeys: Array<AccountPublicKey>;
}