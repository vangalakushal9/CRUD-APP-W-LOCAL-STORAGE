import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { ContentComponent } from './content/content.component';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    BottomNavComponent,
    TopNavComponent,
    SideNavBarComponent,
    DashboardContentComponent,
    ContentComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
