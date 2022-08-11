import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistationComponent } from './components/registation/registation.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registation', component: RegistationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: "/dashboard/get-all-notes", pathMatch: 'full' },
      { path: 'get-all-notes', component: GetAllNotesComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
