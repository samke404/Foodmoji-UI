import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { WelcomePageComponent } from "./components/welcome-page/welcome-page.component";

const routes: Routes = [ {path:'Welcome',component:WelcomePageComponent},
  {path:'Login',component:LoginComponent}, {path:'register', component:RegisterComponent},{path:'', redirectTo:'Login', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}