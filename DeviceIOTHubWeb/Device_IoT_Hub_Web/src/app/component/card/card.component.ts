import { Component } from '@angular/core';

import { UserAdd } from '../../store/models/users.model';
import { DeleteUserAction, AddUserAction } from '../../store/actions/users.action'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as uuid from 'uuid';
import { UserState } from 'src/app/store/reducers/user.reducer';


@Component({
  templateUrl: 'card.component.html'
})
export class CardsComponent {
  localUserList: Observable<UserAdd[]>;
  userinput = { name: '', age: 0, email: '', address: '', id: '' }

  constructor(private store: Store<UserState>) {
    
   }
  ngOnInit() {
  
     this.localUserList = this.store.select(store => store.userList);

     
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
