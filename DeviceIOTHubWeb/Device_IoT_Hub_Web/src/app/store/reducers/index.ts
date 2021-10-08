import { ActionReducerMap } from "@ngrx/store";
import { UserReducer,UserState } from "./user.reducer";
import {  PatientReducer,PatientState} from "./patient.reducer";


export interface AppState {
  userList: UserState;
  patientState: PatientState;
}

export const reducers: ActionReducerMap<AppState> = {
  userList: UserReducer,
  patientState: PatientReducer
};
