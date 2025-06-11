import { createAction } from 'redux-actions';
import { IUser, IAuthStateContext } from './context';

export enum AuthActionEnums {
    loginUserPending = 'LOGIN_USER_PENDING',
    loginUserSuccess = 'LOGIN_USER_SUCCESS',
    loginUserError = 'LOGIN_USER_ERROR',

    registerUserPending = 'REGISTER_USER_PENDING',
    registerUserSuccess = 'REGISTER_USER_SUCCESS',
    registerUserError = 'REGISTER_USER_ERROR',
}

export const loginUserPending = createAction<IAuthStateContext>(
    AuthActionEnums.loginUserPending, () => (
        {
            isPending: true,
            isSuccess: false,
            isError: false
        }
    )
);