

import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { PatientService } from "src/app/service/patient.service";
import { GetUserFail, GetUserSuccess, IUser, UserActionTypes } from "../actions/patient.action";
import {UserActions} from "../actions/patient.action"

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions,
        private userService: PatientService) {
    }

    @Effect()
    getUsers$: Observable<Action> = this.actions$.pipe(
        ofType(UserActionTypes.GetUserLoad),
        mergeMap(() =>
            this.userService.getUsers().pipe(
                map((user: IUser[]) => {
                    debugger;
                    return new GetUserSuccess(user);
                }),
                catchError((error) =>
                    of(new GetUserFail(error)))
            )
        ));

}
