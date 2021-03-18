import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresarComponent,
    MostrarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
