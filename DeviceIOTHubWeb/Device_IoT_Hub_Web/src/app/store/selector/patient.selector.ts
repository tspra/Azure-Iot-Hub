
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserState } from "../reducers/patient.reducer"

const getPatientState = createFeatureSelector<IUserState>('patients');

export const patients = createSelector(getPatientState, (state: IUserState) => {

    return state;
});
