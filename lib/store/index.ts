import IState from "./IState";

export const initialState : IState = { accounts: [], selectedAccount: '' };

export const reducer = (state: IState, action: string) => {
    switch (action) {
      case "RESET":
        return initialState;
      case "CREATE_ACCOUNT":
        return { ...state, hasAccount: true };
      case "CREATE_SESSION":
        return {
          ...state,
          timeCounter: 0
        };
      case "INCREMENT_COUNTER":
        return {
          ...state,
          timeCounter: state.accounts
        };
      case "CLEAR_SESSION":
        return { ...state, timeCounter: 0 };
      default:
        return state;
    }
  };