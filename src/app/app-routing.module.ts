import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path:'', component: LoginPageComponent},
  { path:'datapage', component: MainPageComponent},
  { path:'content', component: ContentComponent},
  { path:'summary', component: SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
