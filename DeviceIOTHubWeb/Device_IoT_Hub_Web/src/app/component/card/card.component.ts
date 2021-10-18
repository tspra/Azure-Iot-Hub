import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetUserLoad, IUser } from 'src/app/store/actions/patient.action';
import { UserAdd } from 'src/app/store/models/users.model';
import { IUserState } from 'src/app/store/reducers/patient.reducer';
import { allUsers } from 'src/app/store/selector/patient.selector';


@Component({
  templateUrl: 'card.component.html'
})
export class CardsComponent {
  localUserList: Observable<UserAdd[]>;
  userinput = { name: '', age: 0, email: '', address: '', id: '' }

  users: IUser[] = [];
  public isLoading: boolean;
  constructor(
    private _store: Store<IUserState>) { }

  ngOnInit() {
    debugger;
    this._store.dispatch(new GetUserLoad());
    const users$ = this._store.pipe(select(allUsers));

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
