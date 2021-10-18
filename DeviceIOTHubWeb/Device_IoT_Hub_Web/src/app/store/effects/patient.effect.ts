

import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { PatientService } from "src/app/service/patient.service";
import { GetPatientFail, GetPatientSuccess, IPatient, PatientActionTypes } from "../actions/patient.action";
import {PatientActions} from "../actions/patient.action"

@Injectable()
export class PatientEffects {

    constructor(private actions$: Actions,
        private patientService: PatientService) {
    }

    @Effect()
    getPatients$: Observable<Action> = this.actions$.pipe(
        ofType(PatientActionTypes.GetPatientLoad),
        mergeMap(() =>
            this.patientService.getPatients().pipe(
                map((user: IPatient[]) => {
                    debugger;
                    return new GetPatientSuccess(user);
                }),
                catchError((error) =>
                    of(new GetPatientFail(error)))
            )
        ));

}
