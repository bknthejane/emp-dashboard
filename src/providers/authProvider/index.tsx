"use client"
import axios from "axios";
import { useContext, useReducer } from "react";
import { axiosInstance } from "@/utils/axiosInstance";
import { INITIAL_STATE, IUser, AuthStateContext, AuthActionContext } from "./context";
import { UserReducer } from "./reducer";
import { loginUserSuccess, loginUserError, loginUserPending, registerUserPending, registerUserSuccess, registerUserError } from "./actions";


export const UserProvider = ({children}:{children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE)
    const instance = axiosInstance();

    const loginUser = async(user: IUser) => {
        dispatch(loginUserPending());
        const endpoint = '/users';
        await instance.get(endpoint)
        .then((response) => {
            
        })
        .catch(error => {
            console.log(error.message)
            dispatch(loginUserError())
        })
    }

    const registerUser = async (user: IUser) => {
        dispatch(registerUserPending());

        const endpoint = '/users';

        await instance.post(endpoint, user)
        .then((response) => {
            dispatch(registerUserSuccess(response.data))
        })
        .catch((error=> {
            dispatch(registerUserError())
        })
    )
    }

    return(
        <AuthStateContext.Provider value={state}>
            <AuthActionContext.Provider value={{loginUser, registerUser}}>
                {children}
            </AuthActionContext.Provider>
        </AuthStateContext.Provider>
    )
}

export const useUserState = () => {
    const context = useContext(AuthStateContext);
    if(!context){
        throw new Error('useUserState must be used within a UserProvider');
    }
    return context;
}

export const useUserActions = () => {
    const context = useContext(AuthActionContext);
    if(!context){
        throw new Error ('useUserState must be used within a UserProvider')
    }
    return context;
}