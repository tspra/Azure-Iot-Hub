import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPatient } from '../store/models/patient.model';
import { IUser } from '../store/actions/patient.action';
 
@Injectable({
 providedIn: 'root'
})
export class PatientService {
 
 constructor(private http: HttpClient) { }
 
//  public getPatients(): Observable<IPatient[]> {
//    return this.http.get<IPatient[]>('https://jsonplaceholder.typicode.com/posts');
//  }
 public getUsers(): Observable<IUser[]> {
  return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/posts');
}
 
}