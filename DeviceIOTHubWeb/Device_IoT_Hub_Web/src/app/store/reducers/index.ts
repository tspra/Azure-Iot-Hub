import { ActionReducerMap } from "@ngrx/store";
import { IUserState, reducer } from "./patient.reducer";



export interface AppState {
  patients:IUserState
}

export const reducers: ActionReducerMap<AppState> = {
  patients:reducer
};
