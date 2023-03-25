import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import {Router} from '@angular/router'
import { PlataformDetectorService } from 'src/app/core/plataform/plataform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  
  loginForm!: FormGroup;

  @ViewChild('userNameInput') userNameInput!: ElementRef;

  constructor(private formBuilder:FormBuilder,
    private authService: AuthService, 
    private router: Router,
    private plataformDetectorService: PlataformDetectorService){

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.authenticate(userName, password).subscribe(
      () => this.router.navigate(['user', userName]),
      (err:any) => {console.log(err),this.loginForm.reset();
        this.plataformDetectorService.isPlatformBrowser() && 
          this.userNameInput.nativeElement.focus();
        alert("Valor de usuário ou senha incorreto");
      }
    )
  }
}
