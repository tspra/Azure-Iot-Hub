import { Component } from '@angular/core';

import { RecentSale, recentSales } from './recent-table-data'

import { AppState } from '../../store/models/app.model';
import { UserAdd } from '../../store/models/users.model';
import { DeleteUserAction, AddUserAction } from '../../store/actions/users.action'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as uuid from 'uuid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  templateUrl: 'card.component.html'
})
export class CardsComponent {
  tableData: RecentSale[];
  // userslist: Observable<Array<UserAdd>>;
  userslist: UserAdd[];
  userinput = { name: '', age: 0, email: '', address: '', id: '' }
  // constructor() {
  //   this.tableData = recentSales;
  //   console.log(this.tableData[4].Date.toDateString());
  // }
  constructor(private store: Store<AppState>) { }
  ngOnInit() {
      this.store.select(store => store.users).subscribe(x=>this.userslist = x);
  }
  saveUser() {
    const myId = uuid.v4();
    this.userinput.id = myId;
    this.store.dispatch(new AddUserAction(this.userinput));
    //clearing the input fields
    this.userinput = {name :'',age:0,email:'',address:'',id :myId}
    console.log(this.userslist);
    }
    deleteUser(id: string){
    this.store.dispatch(new DeleteUserAction(id));
    console.log(this.userslist);
    }
}
