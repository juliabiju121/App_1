import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { DemopipesComponent } from './demopipes/demopipes.component';
import { CustompipesPipe } from './custompipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    Task1Component,
    Task2Component,
    DemopipesComponent,
    CustompipesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
