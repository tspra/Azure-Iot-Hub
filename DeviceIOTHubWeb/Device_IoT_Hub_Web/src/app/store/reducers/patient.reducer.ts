import { Action } from "@ngrx/store";
import { IUser, UserActions, UserActionTypes } from "../actions/patient.action";



export interface IUserState {
    data: IUser[];
    isLoading: boolean;
    message: string;
}

const initialState: IUserState = {
    data: [],
    isLoading: false,
    message: ''
};

export function reducer(state = initialState, action: Action): IUserState {

    let userAction = action as UserActions;
    switch (userAction.type) {
        case UserActionTypes.GetUserLoad: 
        debugger;
        {
            return {
                ...state,
                isLoading: true
            }
        }

        case UserActionTypes.GetUserSuccess: 
        debugger;{
            return {
                ...state,
                data: userAction.payload,
                isLoading: false,
                message: 'Data fetch Successfully!'
            }
        }
        case UserActionTypes.GetUserFail: {
            return {
                data: [],
                isLoading: false,
                message: 'Something went wrong!'
            }
        }
        default:
            return state;
    }
}
