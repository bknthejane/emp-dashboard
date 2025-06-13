"use client"
import { useContext, useReducer } from "react";
import { axiosInstance } from "@/utils/axiosInstance";
import { INITIAL_STATE, IUser, AuthStateContext, AuthActionContext } from "./context";
import { UserReducer } from "./reducer";
import { loginUserSuccess, loginUserError, loginUserPending, registerUserPending, registerUserSuccess, registerUserError } from "./actions";
import {jwtDecode} from 'jwt-decode'


export const UserProvider = ({children}:{children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE)
    const instance = axiosInstance();

    const loginUser = async(user: IUser) => {
        dispatch(loginUserPending());
        const endpoint = '/auth/login';
        
        await instance.post(endpoint, user)
        .then( async (response) => {
            dispatch(loginUserSuccess(response.data));
            const token = jwtDecode(response.data.token);
            console.log(JSON.stringify(token))
            await instance.get(`/users/${token.sub}`).then((subData) => {

                const userData = {
                    username: subData.data.username,
                    email: subData.data.email,
                }
                localStorage.setItem('UserInfo', JSON.stringify(userData))
            }).catch(error =>{ 
                console.log(error)
            })
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