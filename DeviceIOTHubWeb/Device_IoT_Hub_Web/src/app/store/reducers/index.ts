import { UserAdd} from '../models/users.model';
import {UserActions, UserActionTypes} from '../actions/users.action'
import { Action } from '@ngrx/store';

//initial store data
const initialState : UserAdd = {
  
    id : "123-456-789",
    name : "John doe",
    age : 32,
    address : "Hello world",
    email : "something@gmail.com"
}
  

export function UserReducer(state: UserAdd[] = [], action: Action) {
  const tutorialAction = action as UserActions; 

   switch(tutorialAction .type) 
   { 
    case UserActionTypes.ADD_USER :
      return [...state,tutorialAction.payload];
     case UserActionTypes.DELETE_USER:
       return state.filter(item => item.id !== tutorialAction.payload);
      default:
        return state;
    }

}
