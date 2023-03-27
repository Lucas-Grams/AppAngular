import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { SingupService } from "./singup.service";
import { debounceTime } from "rxjs";
import { switchMap } from "rxjs";
import { map } from "rxjs";
import { first } from "rxjs";

@Injectable({providedIn: 'root'})

export class UserNotTakenValidatorService{
constructor(private signupService: SingupService){}

    checkUserNameTaken(){

        return (control: AbstractControl) => {
            return control.valueChanges.pipe(debounceTime(300)).pipe(switchMap(userName =>{
                return this.signupService.checkUserNameTaken(userName)
            })).pipe(map(isTaken => isTaken? {userNameTaken: true} : null)).pipe(first());
        }
    }

}