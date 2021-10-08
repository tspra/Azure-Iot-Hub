//The user model interface
export class UserAdd {
    id : string;
    name : string;
    email : string;
    age : number;
    address : string;

    constructor(data: any) {
      Object.assign(this, data);
    }
  }
  
  