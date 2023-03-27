import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http:://localhost:300';


@Injectable({
  providedIn: 'root'
})
export class SingupService {

  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName:string){
    return this.http.get(API + '/user/exists' + userName)
  }
}
