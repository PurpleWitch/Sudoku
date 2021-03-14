import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { Grid } from './ui/Grid/grid.component';
import { Navbar } from './ui/Navbar/nav.component';
import { Body } from './ui/Body/body.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [
    AppComponent,
    Grid
  ],
  declarations: [
    AppComponent,
    Navbar,
    Grid,
    Body
  ],
  entryComponents: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      // { path: '', redirectTo: '/signin', pathMatch: 'full'},
      // { path: 'Signin', component: signin },
      // { path: 'Signup', component: signup },
      // { path: '**', component: error }
    ])
  ]
})

export class AppModule {}
