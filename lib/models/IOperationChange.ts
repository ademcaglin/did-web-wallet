import IInceptionKey from "./IInceptionKey";
import IPublicKey from "./IPublicKey";
export default interface IOperationChange {
  id: string;
  inceptionKey?: IInceptionKey;
  publicKey?: IPublicKey;
  deleted?: string;
}
