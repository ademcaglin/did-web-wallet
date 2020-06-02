import { State } from "../types/State";

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: M[Key];
    }
};

export enum Types {
    Create = "CREATE_USER",
    Delete = "DELETE_USER",
    Add = "ADD_KEY"
}


type UserPayload = {
    [Types.Create]: {
        id: string;
        username: string;
        displayName: string;
    };
    [Types.Delete]: {
        id: string;
    };
};

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];

export const userReducer = (state: State, action: UserActions) => {
    switch (action.type) {
        case Types.Create:
            return {
                ...state, users: [
                    ...state.users,
                    {
                        id: action.payload.id,
                        username: action.payload.username,
                        displayName: action.payload.displayName
                    }
                ]
            };
        case Types.Delete:
            return { ...state, users: [...state.users.filter(user => user.id !== action.payload.id)] };
        default:
            return state;
    }
};

