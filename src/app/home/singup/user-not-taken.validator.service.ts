import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { SingupService } from "./singup.service";
import { debounceTime, switchMap, map, first, tap  } from "rxjs/operators";

@Injectable({providedIn: 'root'})

export class UserNotTakenValidatorService{
constructor(private signupService: SingupService){}

    checkUserNameTaken(){

        return (control: AbstractControl) => {
            return control.valueChanges.pipe(debounceTime(300)).pipe(switchMap(userName => {
             return this.signupService.checkUserNameTaken(userName)
        })).pipe(map(isTaken => isTaken ? { userNameTaken: true } : null)).pipe(tap(r => console.log(r))).pipe(first());
        }
    }

}