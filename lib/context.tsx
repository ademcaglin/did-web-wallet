import { useEffect, useReducer, Dispatch, createContext } from "react";
import { State } from "./types/State";
import { set, get } from "idb-keyval";

const initialState: State = {
    users: []
};

type UserActions =
    | { type: 'init', state: State }
    | { type: 'create', username: string }
    | { type: 'delete', id: string }
    | { type: 'addkey', id: string };

function reducer(state: State, action: UserActions): State {
    switch (action.type) {
        case 'init':
            return {
                ...state, ...action.state
            };
        case 'create':
            return {
                ...state, users: [
                    ...state.users,
                    {
                        id: action.username,
                        username: action.username,
                        displayName: action.username
                    }
                ]
            };
        case 'delete':
            return { ...state, users: [...state.users?.filter(user => user.id !== action.id)] };
        case 'addkey':
            return {
                ...state, users: [
                    ...state.users,
                    {
                        id: action.id,
                        username: action.id,
                        displayName: action.id
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
            if (persistedState && persistedState.users.length !== 0){
                dispatch({ type: 'init', state: persistedState });
            }
        }
        fetchUser();
    }, []);

    useEffect(() => {
        if (state.users.length !== 0) {
            set('userState', state)
        }
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
