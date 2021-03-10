import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';
import { Meteor } from 'meteor/meteor';
import 'reflect-metadata';
import 'zone.js';
 
Meteor.startup(() => {
  if ( Meteor.isProduction ) {enableProdMode();}
  platformBrowserDynamic().bootstrapModule(AppModule).then();
});
