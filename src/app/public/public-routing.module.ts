import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseInitiationComponent } from './components/case-initiation/case-initiation.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RoleFormComponent } from './components/role-form/role-form.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { ScrutinyComponent } from './components/scrutiny/scrutiny.component';
import { ConfigurationscreenComponent } from './configurationscreen/configurationscreen.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { CheckerComponent } from './components/checker/checker.component';
import { UserCreationComponent } from './components/user-creation/user-creation.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'case-initiation', component: CaseInitiationComponent },
  { path: 'scrutiny', component: ScrutinyComponent },
  { path: 'roles', component: RoleListComponent },
  { path: 'create-role', component: RoleFormComponent },
  { path: 'admin', component: ConfigurationscreenComponent },
  { path: 'data-entry', component:DataEntryComponent},
  { path: 'checker', component: CheckerComponent},
  { path: 'create-user', component: UserCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
