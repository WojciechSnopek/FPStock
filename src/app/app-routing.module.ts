import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './features/userAccount/edit-profile/edit-profile.component';
import { LoginComponent } from './features/auth/login/login.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
