import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PatientState } from "../reducers/patient.reducer";
 
const getPatientState = createFeatureSelector<PatientState>('patients');
 export const patients = createSelector(getPatientState, (state: PatientState) => {
     debugger;
     return state;
 });


 