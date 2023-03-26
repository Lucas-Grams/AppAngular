import { Injectable } from '@angular/core';

const Key = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasToken(){
    return !!this.getToken;
  }

  setToken(token:string){
    window.localStorage.setItem(Key, token);
  }

  getToken():any{  
    return window.localStorage.getItem(Key);
  }

  removeToken(){
    window.localStorage.removeItem(Key);
  }

}
