import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import{HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { AboutUsComponent } from './aboutUs/aboutUs.component';
import { adminComponent } from './admin/admin.component';
import { adminServices } from './admin/admin.services';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    adminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component:AboutUsComponent},
      {path: 'admin', component:adminComponent}
    ])
  ],
  providers: [adminServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
