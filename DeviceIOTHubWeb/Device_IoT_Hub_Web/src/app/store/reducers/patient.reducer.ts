import { Action } from "@ngrx/store";
import { IPatient, PatientActions, PatientActionTypes } from "../actions/patient.action";



export interface IUserState {
    data: IPatient[];
    isLoading: boolean;
    message: string;
}

const initialState: IUserState = {
    data: [],
    isLoading: false,
    message: ''
};

export function reducer(state = initialState, action: Action): IUserState {

    let userAction = action as PatientActions;
    switch (userAction.type) {
        case PatientActionTypes.GetPatientLoad: 
        debugger;
        {
            return {
                ...state,
                isLoading: true
            }
        }

        case PatientActionTypes.GetPatientSuccess: 
        debugger;{
            return {
                ...state,
                data: userAction.payload,
                isLoading: false,
                message: 'Data fetch Successfully!'
            }
        }
        case PatientActionTypes.GetPatientFail: {
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
