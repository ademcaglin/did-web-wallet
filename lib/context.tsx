import { useEffect, useReducer, Dispatch, createContext } from "react";
import { State } from "./types/State";
import { set, get } from "idb-keyval";
import { User } from "./types/User";

const initialState: State = {
    users: [],
    hasChanges: false,
    keys: []
};


type UserActions =
    | { type: 'init', state: State }
    | { type: 'create_user', newUser: User }
    | { type: 'delete_key', id: string }
    | { type: 'add_key', id: string }
    | { type: 'select_user', newUser: User };

function reducer(state: State, action: UserActions): State {
    switch (action.type) {
        case 'init':
            return {
                ...state, ...action.state
            };
        case 'create_user':
            return {
                ...state,
                users: state.currentUser ? [
                    ...state.users,
                    { ...state.currentUser! }
                ] : [],
                currentUser: { ...action.newUser },
                hasChanges: true
            };
        case 'select_user':
            return {
                ...state,
                users: state.currentUser ? [
                    ...state.users,
                    { ...state.currentUser! }
                ] : [],
                currentUser: { ...action.newUser },
                hasChanges: true
            };
        case 'delete_key':
            return {
                ...state,
                users: [...state.users.filter(user => user.id !== action.id)]
            };
        case 'add_key':
            return {
                ...state,
                users: [
                    ...state.users,
                    {
                        id: action.id,
                        username: action.id,
                        displayName: action.id,
                        operations: [],
                        publicKeys: []
                    }
                ]
            };
    }
}

const AppContext = createContext<{ state: State; dispatch: Dispatch<UserActions>; }>({
    state: initialState,
    dispatch: () => null
});

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function fetchUser() {
            let persistedState = await get<State>("userState");
            if (persistedState && persistedState.currentUser) {
                console.log("State has initialized:" + JSON.stringify(state));
                dispatch({ type: 'init', state: persistedState });
            }
        }
        fetchUser();
    }, []);

    useEffect(() => {
        console.log("State has persisted:" + JSON.stringify(state));
        set('userState', state)
    }, [state]);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };












/*export const UserContext = createContext();

const UserContextProvider = (props: any) => {
    const [user, dispatch] = useReducer(userReducer, {});

    useEffect(() => {
        async function fetchUser() {
            const user = await getUser();
            dispatch({ type: 'ADD_USER', user });
        }
        fetchUser();
    }, []);

    // Update AsyncStorage when user is updated
    useEffect(() => {
        // This check is required to avoid initial writing to asyncStorage
        if (user) {
            //AsyncStorage.setItem('user', JSON.stringify(user))
        }
    }, [user]);


    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {props.children}
        </UserContext.Provider>
    );
}*/
