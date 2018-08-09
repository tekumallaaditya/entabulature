import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { AboutUsComponent } from './aboutUs/aboutUs.component';
import { adminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    adminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component:AboutUsComponent},
      {path: 'admin', component:adminComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
