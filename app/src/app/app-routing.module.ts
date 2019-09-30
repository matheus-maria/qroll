import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PresenceComponent } from './components/presence/presence.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'presence', component: PresenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
