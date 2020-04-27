import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { NewChildComponent } from './new-child/new-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    NewChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
