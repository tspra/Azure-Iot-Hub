import { UserAdd } from '../models/users.model';
import { UserActions, UserActionTypes } from '../actions/users.action'
import { Action } from '@ngrx/store';

export interface PatientState {
    userList: UserAdd[];
}

const initialState = {
    userList: [
    ]
};

export function PatientReducer(state:PatientState = initialState, action: Action) {
    const tutorialAction = action as UserActions;
    debugger;
    switch (tutorialAction.type) {
        case UserActionTypes.ADD_USER:

            return {
                ...state,
                userList: [...state.userList, tutorialAction.payload]
            };


        case UserActionTypes.DELETE_USER:
            return {
                ...state,
                userList: state.userList.filter((user: UserAdd, index) => {
                    return user.id != tutorialAction.payload;
                })
            };

        default: return state;
    }
}
