import { NgModule, ErrorHandler } from '@angular/core';
import { App } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
 
@NgModule({
  declarations: [
    App
  ],
  entryComponents: [
    App
  ],
  providers: [
    { provide: ErrorHandler }
  ],
  imports: [
    BrowserModule,
  ]
})
export class AppModule {}