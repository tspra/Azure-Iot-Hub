import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { PatientService } from '../../service/patient.service';
import { Action, select, Store } from '@ngrx/store';
import { catchError, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { IPatient } from '../models/patient.model';
import { PatientActionTypes } from '../actions/patient.action';
import * as patient from '../actions/patient.action'
import { PatientState } from '../reducers/patient.reducer';
import { patients } from '../selector/patient.selector';
 
@Injectable()
export class PatientEffects {
 
    constructor(private actions$: Actions,
        private userService: PatientService,private _store: Store<PatientState> ) {
    }
    getPatients$ = createEffect(() => {
        return this.actions$.pipe( 
          ofType(PatientActionTypes.GetPatientLoad),
          withLatestFrom(this._store.pipe(select(patients))),
          switchMap(([action, guestData]) => {
            return this.userService.getPatients().pipe(
                map((user: IPatient[]) => {
                    debugger;
                    return new patient.GetPatientSuccess(user)
                }),
                catchError((error) =>
                    of(new patient.GetPatientFail(error)))
            )
          })
        );
      });
 
 
    // @Effect()
    // getPatients$: Observable<Action> = this.actions$.pipe(
    //     ofType(PatientActionTypes.GetPatientLoad),
    //     mergeMap(() =>
        
    //         this.userService.getPatients().pipe(
    //             map((user: IPatient[]) => {
    //                 debugger;
    //                 return new patient.GetPatientSuccess(user)
    //             }),
    //             catchError((error) =>
    //                 of(new patient.GetPatientFail(error)))
    //         )
    //     ));
 
}