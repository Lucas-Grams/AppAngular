import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit{

  signupForm!: FormGroup;

  constructor(private formBuider:FormBuilder, 
    private userNotTakenValidatorService: UserNotTakenValidatorService){}
  
  
  ngOnInit(): void {
    const fn = this.userNotTakenValidatorService.checkUserNameTaken();
    this.signupForm = this.formBuider.group({
      email:['', [Validators.required, Validators.email]],
      userName:['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(/^[a-z0-9_\-]+$/)], this.userNotTakenValidatorService.checkUserNameTaken()],
      fullName:['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)],],
      password:['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)],],
    });
  }


}
