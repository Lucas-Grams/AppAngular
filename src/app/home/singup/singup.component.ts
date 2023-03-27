import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { PlataformDetectorService } from 'src/app/core/plataform/plataform-detector.service';
import { NewUser } from './new-user';
import { SingupService } from './singup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'], 
  providers: [UserNotTakenValidatorService]
})
export class SingupComponent implements OnInit{

  signupForm!: FormGroup;
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;

  constructor(private formBuider:FormBuilder, 
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private singupService: SingupService,
    private router: Router, 
    private platformDetectorService: PlataformDetectorService){}
  
  
  ngOnInit(): void {
    this.signupForm = this.formBuider.group({
      email:['', [Validators.required, Validators.email]],
      userName:['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(/^[a-z0-9_\-]+$/)], this.userNotTakenValidatorService.checkUserNameTaken()],
      fullName:['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)],],
      password:['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)],],
    });
    this.platformDetectorService.isPlatformBrowser() && 
          this.emailInput.nativeElement.focus();
    }
    singup(){ 
      console.log("entrou no singup");
      const newUser = this.signupForm.getRawValue() as NewUser; 
      this.singupService.singup(newUser).subscribe(()=>this.router.navigate(['']),
      err => console.log(err));
  }
}
