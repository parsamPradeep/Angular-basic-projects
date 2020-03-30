import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableRowComponent } from './table-row/table-row.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
@NgModule({
  declarations: [

    AppComponent,
    TableRowComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModuleModule,
    BrowserModule,
    AppRoutingModule,
  ],
  entryComponents: [TableRowComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));