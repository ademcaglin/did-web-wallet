import { InceptionKey } from "./InceptionKey";
import { PublicKey } from "./PublicKey";
export type OperationChange = {
    id: string;
    inceptionKey?: InceptionKey;
    publicKey?: PublicKey;
    deleted?: string;
};
