
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserState } from "../reducers/patient.reducer"

const getUserState = createFeatureSelector<IUserState>('patients');

export const allUsers = createSelector(getUserState, (state: IUserState) => {
    debugger;
    return state;
});
