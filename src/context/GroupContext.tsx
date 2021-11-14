import React, { createContext, useReducer, Dispatch } from 'react';
import type { GroupType } from '../api/group';

interface StateType {
  groups: GroupType[];
  currentUserGroups: number[];
}

interface DispatchType {
  type: 'getGroups' | 'getCurrentUserGroups';
  payload?: StateType;
}

interface ContextType {
  groupState: StateType;
  groupDispatch: Dispatch<DispatchType> | null;
}

const initialState: StateType = {
  groups: [],
  currentUserGroups: [],
};

const groupReducer = (state: StateType, action: DispatchType): StateType => {
  switch (action.type) {
    case 'getGroups':
      if (!action.payload) return { ...initialState };
      return {
        groups: action.payload.groups,
        currentUserGroups: state.currentUserGroups,
      };
    case 'getCurrentUserGroups':
      if (!action.payload) return { ...initialState };
      return {
        groups: state.groups,
        currentUserGroups: action.payload.currentUserGroups,
      };
    default:
      return state;
  }
};

export const groupStateContext = createContext<ContextType>({ groupState: initialState, groupDispatch: null });

interface UserProviderProps {
  children: React.ReactElement;
}

const GroupProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(groupReducer, initialState);

  return <groupStateContext.Provider value={{ groupState: state, groupDispatch: dispatch }}>{children}</groupStateContext.Provider>;
};

export default GroupProvider;
