import IOperationChange from "./IOperationChange";
import IOperationBy from "./IOperationBy";
export default interface IOperation {
  change: IOperationChange;
  by: IOperationBy;
}
