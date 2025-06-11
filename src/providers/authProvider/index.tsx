import { axiosInstance } from "@/utils/axiosInstance";
import { INITIAL_STATE, IUser, AuthActionContext, AuthStateContext } from "./context";
import { AuthReducer } from "./reducer";
import { useContext, useReducer } from "react";
import { loginUserError, loginUserPending, loginUserSuccess, registerUserError, registerUserPending, registerUserSuccess } from "./actions";
import axios from 'axios';

export const UserProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    const instance = axiosInstance();

    const loginUser = async() => {
        dispatch(loginUserPending());
        const endpoint = `/login`;
        await axios.post(endpoint)
        .then((response) => {
            dispatch(loginUserSuccess(response.data));
        })
        .catch((error) => {
            console.error(error);
            dispatch(loginUserError());
        });
    };

    const registerUser = async() => {
        dispatch(registerUserPending());
        const endpoint = `/register`;
        await axios.post(endpoint)
        .then((response) => {
            dispatch(registerUserSuccess(response.data));
        })
        .catch((error) => {
            console.error(error);
            dispatch(registerUserError());
        });
    };

    return (
        <>
            <AuthStateContext.Provider value={state}>
                <AuthActionContext.Provider value={{loginUser, registerUser}}>
                    {children}
                </AuthActionContext.Provider>
            </AuthStateContext.Provider>
        </>
    )
};

export const useAuthState = () => {
    const context = useContext(AuthStateContext);
    if (!context) {
        throw new Error('useAuthState must be used within a UserProvider');
    }

    return context;
}

export const useAuthActions = () => {
    const context = useContext(AuthActionContext);
    if (!context) {
        throw new Error('useAuthActions must be used within a UserProvider');
    }
}