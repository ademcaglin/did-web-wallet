
import { set, get } from "idb-keyval";
import { useReducer, useEffect, Reducer, ReducerState, Dispatch, ReducerAction, ReducerWithoutAction, ReducerStateWithoutAction } from 'react'
export const storageKey = "account";
/*type State = {
  hasChanged: boolean;
  accounts: string[];
  selectedAccount?: string;
}

export const initialState2: State = { hasChanged: false, accounts: [], selectedAccount: '' };

export const reducer = (state: State, action: string) => {
  switch (action) {
    case "RESET":
      return initialState2;
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

export function usePersistedReducer<R extends Reducer<any, any>, I>(
  reducer: R,
  initialState: ReducerState<R>
) {
  const hookVars = useReducer(reducer, initialState, async (initialState: I) => {
    const persisted = await get<>(storageKey);
    return persisted !== null
      ? persisted
      : initialState
  })

  useEffect(() => {
    set(storageKey, hookVars[0]);
  }, [storageKey, hookVars[0]])

  return hookVars
}

function cv() {
  //const [state, dispatch] = usePersistedReducer(reducer, initialState2);
}
*/
/*

import { useState, useEffect, useCallback } from "react";
import { set, get } from "idb-keyval";

export function usePersistedState<TState>(keyToPersistWith: string, defaultState: TState) {
    const [state, setState] = useState<TState | undefined>(undefined);

    useEffect(() => {
        async function init() {
            let retrievedState = await get<TState>(keyToPersistWith);
            return setState(retrievedState ?? defaultState);
        }
        init();
    }, [keyToPersistWith, setState, defaultState]);

    const setPersistedValue = useCallback((newValue: TState) => {
        setState(newValue);
        set(keyToPersistWith, newValue);
    }, [keyToPersistWith, setState]);

    return [state, setPersistedValue] as const;
}



import { useState, useEffect } from 'react';
import * as RTStorage from 'rt-storage';
export default function useGlobalStorage() {
  const storage = new RTStorage(storageOptions);
  const useStorage = (key: string, initialData: any) => {
    const [data, setState] = useState(initialData);
    useEffect(() => {
      function handleStorageChange(data) {
        setState(data);
      }
      storage.getItem(key).then(lastData => {
        if (lastData) {
          setState(lastData);
        }
      });
      const subscription = storage.subscribe(key, handleStorageChange);
      return () => {
        subscription.unsubscribe();
      };
    }, []);
    const setData = async(newData: any) => {
      let newValue;
      if (typeof newData === 'function') {
        newValue = newData(data);
      } else {
        newValue = newData
      }
      setState(newValue);
      await storage.setItem(key, newValue);
    }

    return [data, setData];
  }
  return useStorage;
};*/