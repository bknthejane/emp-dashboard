import { createContext } from "react";

export interface IUser {
    id?: number;
    name?: string;
    email: string;
    role?:string;
    avatar?: string;
    password: string;
}

export interface IAuthStateContext {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    user?: IUser;
}

export interface IAuthActionContext {
    loginUser: (login: IUser) => void;
    registerUser: (register: IUser) => void;
}

export const INITIAL_STATE: IAuthStateContext = {
    isPending: false,
    isSuccess: false,
    isError: false,
};

export const AuthStateContext = createContext<IAuthStateContext>(INITIAL_STATE);

export const AuthActionContext = createContext<IAuthActionContext | undefined>(undefined);