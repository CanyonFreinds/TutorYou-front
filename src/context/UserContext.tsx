import React, { createContext, useReducer, Dispatch } from 'react';
import { RoleType } from '../api/user';

interface StateType {
  accessToken: string;
  email: string;
  name: string;
  role: RoleType[];
  userId: number;
  studentGroups: number[];
  teacherGroups: number[];
}

interface DispatchType {
  type: 'login' | 'logout' | 'getStudentGroups' | 'getTeacherGroups';
  payload?: StateType;
}

interface ContextType {
  state: StateType;
  dispatch: Dispatch<DispatchType> | null;
}

const initialState: StateType = {
  accessToken: '',
  email: '',
  name: '',
  role: [],
  userId: 0,
  studentGroups: [],
  teacherGroups: [],
};

const userReducer = (state: StateType, action: DispatchType): StateType => {
  switch (action.type) {
    case 'login':
      if (!action.payload) return { ...initialState };
      return {
        accessToken: action.payload.accessToken,
        email: action.payload.email,
        name: action.payload.name,
        role: action.payload.role,
        userId: action.payload.userId,
        studentGroups: [],
        teacherGroups: [],
      };
    case 'getStudentGroups':
      if (!action.payload) return { ...initialState };
      return {
        accessToken: state.accessToken,
        email: state.email,
        name: state.name,
        role: state.role,
        userId: state.userId,
        studentGroups: action.payload.studentGroups,
        teacherGroups: state.teacherGroups,
      };
    case 'getTeacherGroups':
      if (!action.payload) return { ...initialState };
      return {
        accessToken: state.accessToken,
        email: state.email,
        name: state.name,
        role: state.role,
        userId: state.userId,
        studentGroups: state.studentGroups,
        teacherGroups: action.payload.teacherGroups,
      };
    case 'logout':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const userStateContext = createContext<ContextType>({ state: initialState, dispatch: null });

interface UserProviderProps {
  children: React.ReactElement;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return <userStateContext.Provider value={{ state, dispatch }}>{children}</userStateContext.Provider>;
};

export default UserProvider;
