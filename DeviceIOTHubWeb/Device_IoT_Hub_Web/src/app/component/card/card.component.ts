import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {  GetPatientLoad } from 'src/app/store/actions/patient.action';
import { IPatient } from 'src/app/store/models/patient.model';
import { UserAdd } from 'src/app/store/models/users.model';
import { IUserState } from 'src/app/store/reducers/patient.reducer';
import { patients } from 'src/app/store/selector/patient.selector';


@Component({
  templateUrl: 'card.component.html'
})
export class CardsComponent {
  localUserList: Observable<UserAdd[]>;
  userinput = { name: '', age: 0, email: '', address: '', id: '' }

  users: IPatient[] = [];
  public isLoading: boolean;
  constructor(
    private _store: Store<IUserState>) { }

  ngOnInit() {
    this._store.dispatch(new GetPatientLoad());
    const users$ = this._store.pipe(select(patients));
    users$.subscribe(res => {
      debugger;
      this.isLoading = res.isLoading;
      this.users = res.data;
      console.log(this.users);
    });
  }
  saveUser()
  {
    
  }
}
