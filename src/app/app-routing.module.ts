import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationComponent } from './authentication/authentication.component';


const routes: Routes = [
  {"path":"","component":HomeComponent},
  {"path":"profile","component":ProfileComponent},
  {"path":"auth","component":AuthenticationComponent},
  // {"pathMatch":"full","redirectTo":"home","path":"" },
  // {"path":"**","component":NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
