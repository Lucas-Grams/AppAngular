import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { SingupComponent } from './singup/singup.component';



const routes: Routes = [
    { path:'', component: HomeComponent, canActivate: [AuthGuard],
    children:[
        { path:'', component: SigninComponent},
        { path:'singup', component: SingupComponent},
    ]},
]

@NgModule({
    imports: [ 
        RouterModule.forChild(routes) 
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule { }

