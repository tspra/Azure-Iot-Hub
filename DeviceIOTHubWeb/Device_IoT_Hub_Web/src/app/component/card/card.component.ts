import { Component } from '@angular/core';

import { UserAdd } from '../../store/models/users.model';
import { DeleteUserAction, AddUserAction, UserActionTypes } from '../../store/actions/users.action'
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as uuid from 'uuid';
import { UserState } from 'src/app/store/reducers/user.reducer';
import { PatientState } from 'src/app/store/reducers/patient.reducer';
import { GetPatientLoad, GetPatientSuccess } from 'src/app/store/actions/patient.action';
import { patients } from 'src/app/store/selector/patient.selector';
import { IPatient } from 'src/app/store/models/patient.model';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { selectExistingCurrentAdAccount } from 'src/app/model/pipe';


@Component({
  templateUrl: 'card.component.html'
})
export class CardsComponent {
  localUserList: Observable<UserAdd[]>;
  userinput = { name: '', age: 0, email: '', address: '', id: '' }
  patients: any;
  constructor(private store: Store<UserState> , private _store: Store<PatientState>) {
    //this._store.dispatch(new GetPatientLoad());

    
   }
  ngOnInit() {
  
     this.localUserList = this.store.select(store => store.userList);

      debugger;
     this._store.dispatch(new GetPatientLoad());
   

    const users$ = this._store.pipe(select(patients),filter(val=>!!val));
 debugger;
    users$.subscribe(res => {
     debugger
      this.patients = res.patients;
    });


 
    // this._store.pipe(
    //   map(state => 
        
    //     patients(state)),
    //     filter(val=>!!val)
    // ).subscribe(res=>
    //   {
    //     debugger;
    //      //this.patients = res?.patients;
    //     console.log(this.patients);
    //   })
    
      


     
      }
  saveUser() {
    const myId = uuid.v4();
    this.userinput.id = myId;
    this.store.dispatch(new AddUserAction(this.userinput));
  
    this.userinput = {name :'',age:0,email:'',address:'',id :myId}
   
    }
    deleteUser(id: string){
    this.store.dispatch(new DeleteUserAction(id));
   
    }
}
