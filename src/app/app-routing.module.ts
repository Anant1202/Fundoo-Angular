import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistationComponent } from './components/registation/registation.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AuthenticationGuard } from './authentication.guard';
import { TrashnoteComponent } from './components/trashnote/trashnote.component';
import { ArchivenoteComponent } from './components/archivenote/archivenote.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registation', component: RegistationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },
  {
    path: 'dashboard', component: DashboardComponent,canActivate: [AuthenticationGuard],
    children: [
      { path: '', redirectTo: "/dashboard/get-all-notes", pathMatch: 'full' },
      { path: 'get-all-notes', component: GetAllNotesComponent },
      { path: 'Trash', component: TrashnoteComponent },
      { path: 'Archieve', component: ArchivenoteComponent }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
