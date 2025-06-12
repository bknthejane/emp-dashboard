import { handleActions } from "redux-actions";
import { INITIAL_STATE, IAuthStateContext } from "./context";
import { AuthActionEnums } from "./actions";

export const UserReducer = handleActions<IAuthStateContext, IAuthStateContext>({
    [AuthActionEnums.loginUserPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.loginUserSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.loginUserError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.registerUserPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.registerUserSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.registerUserError]: (state, action) => ({
        ...state,
        ...action.payload,
    })
}, INITIAL_STATE)