import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServersComponent } from './servers/servers.component';


const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : '', redirectTo : 'login', pathMatch : 'full'},
  {path : 'service', component: ServersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
