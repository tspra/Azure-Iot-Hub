
import { HttpErrorResponse } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { IPatient } from "../models/patient.model";


export enum PatientActionTypes {
    GetPatientLoad = '[Patient] Get Patient',
    GetPatientSuccess = '[Patient] Get Patient Success',
    GetPatientFail = '[Patient] Get Patient Fail',
}


export class GetPatientLoad implements Action {
    public readonly type = PatientActionTypes.GetPatientLoad;
}

export class GetPatientSuccess implements Action {
    public readonly type = PatientActionTypes.GetPatientSuccess;

    constructor(public payload: IPatient[]) { }
}

export class GetPatientFail implements Action {
    public readonly type = PatientActionTypes.GetPatientFail;

    constructor(public error: HttpErrorResponse) { }
}



export type PatientActions = GetPatientLoad | GetPatientSuccess | GetPatientFail