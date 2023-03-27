import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

const API = 'http://localhost:3000';


@Injectable()
export class SingupService {

  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName:string){
    return this.http.get(API + '/user/exists/' + userName)
  }

  singup(newUser: NewUser){
    console.log("entrou no serviço");
    return this.http.post(API + '/user/singup', newUser);
  }
}
