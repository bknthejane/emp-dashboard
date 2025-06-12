import { createAction } from 'redux-actions';
import { IUser, IAuthStateContext, IAuthActionContext } from './context';

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

export const loginUserSuccess = createAction<IAuthStateContext, IUser>(
    AuthActionEnums.loginUserSuccess, (user: IUser) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            user,
        }
    )
)

export const loginUserError = createAction<IAuthStateContext>(
    AuthActionEnums.loginUserError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError: true
        }
    )
)

export const registerUserPending = createAction<IAuthStateContext>(
    AuthActionEnums.registerUserPending, () =>
(
    {
        isPending: true,
        isSuccess: false,
        isError: false
    }

)
)

export const registerUserSuccess = createAction<IAuthStateContext, IUser>(
    AuthActionEnums.registerUserSuccess, (user: IUser) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            user
        }
    )
)

export const registerUserError = createAction<IAuthStateContext>(
    AuthActionEnums.registerUserError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError: true
        }
    )
)

