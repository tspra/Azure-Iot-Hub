import { UserAdd } from '../models/users.model';
import { UserActions, UserActionTypes } from '../actions/users.action'
import { Action } from '@ngrx/store';
import { IPatient } from '../models/patient.model';
import { PatientActions, PatientActionTypes } from '../actions/patient.action';

// export interface PatientState {
//     userList: UserAdd[];
// }

// const initialState = {
//     userList: [
//     ]
// };

// export function PatientReducer(state:PatientState = initialState, action: Action) {
//     const tutorialAction = action as UserActions;
//     debugger;
//     switch (tutorialAction.type) {
//         case UserActionTypes.ADD_USER:

//             return {
//                 ...state,
//                 userList: [...state.userList, tutorialAction.payload]
//             };


//         case UserActionTypes.DELETE_USER:
//             return {
//                 ...state,
//                 userList: state.userList.filter((user: UserAdd, index) => {
//                     return user.id != tutorialAction.payload;
//                 })
//             };

//         default: return state;
//     }
// }


export interface PatientState {
    patients: IPatient[];
    isLoading: boolean;
    message: string;
}

const initialState = {
    patients: [],
    isLoading: false,
    message: ''
};
export function PatientReducer(state : PatientState= initialState, action: Action): PatientState {
    const patientAction = action as PatientActions;

  
    switch (patientAction.type) {
        case PatientActionTypes.GetPatientLoad: {
            debugger;
            return {
                ...state,
                isLoading: true
            }
        }
        case PatientActionTypes.GetPatientSuccess: {
            debugger;
            return {
                ...state,
                patients: patientAction.payload,
                isLoading: false,
                message: 'Data fetch Successfully!'
            }
        }
        case PatientActionTypes.GetPatientFail: {
            return {
                patients: [],
                isLoading: false,
                message: 'Something went wrong!'
            }
        }
        default:
            return state;
    }
}