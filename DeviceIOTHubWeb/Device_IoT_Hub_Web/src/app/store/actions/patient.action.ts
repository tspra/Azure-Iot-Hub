// import { Action } from '@ngrx/store';
// import { HttpErrorResponse } from '@angular/common/http';
// import { IPatient } from '../models/patient.model';

import { HttpErrorResponse } from "@angular/common/http";
import { Action } from "@ngrx/store";

 

// export enum PatientActionTypes {
//     GetPatientLoad = '[Patient] Get Patients',
//     GetPatientSuccess = '[Patient] Get Patient Success',
//     GetPatientFail = '[Patient] Get Patient Fail',
   
// }
// export class GetPatientLoad implements Action {
//     public readonly type = PatientActionTypes.GetPatientLoad;
// }
// export class GetPatientSuccess implements Action {
//     public readonly type = PatientActionTypes.GetPatientSuccess;
 
//     constructor(public payload: IPatient[]) { }
// }
// export class GetPatientFail implements Action {
//     public readonly type = PatientActionTypes.GetPatientFail;
 
//     constructor(public error: HttpErrorResponse) { }
// }
// export type PatientActions = GetPatientLoad | GetPatientSuccess | GetPatientFail

export interface IUser {
    body: string;
    id: number;
    title: string;
    userId: number;
}


export enum UserActionTypes {
    GetUserLoad = '[User] Get User',
    GetUserSuccess = '[User] Get User Success',
    GetUserFail = '[User] Get User Fail',
}


export class GetUserLoad implements Action {
    public readonly type = UserActionTypes.GetUserLoad;
}

export class GetUserSuccess implements Action {
    public readonly type = UserActionTypes.GetUserSuccess;

    constructor(public payload: IUser[]) { }
}

export class GetUserFail implements Action {
    public readonly type = UserActionTypes.GetUserFail;

    constructor(public error: HttpErrorResponse) { }
}



export type UserActions = GetUserLoad | GetUserSuccess | GetUserFail