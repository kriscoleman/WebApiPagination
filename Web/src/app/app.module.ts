import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdCardModule } from '@angular/material/card';
import { MdListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdCardModule,
    MdListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
