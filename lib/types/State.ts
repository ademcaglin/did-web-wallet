import { User } from "./User";

export type State = {
    users: User[];
    currentUser?: User;
}