import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

import { AppComponent } from './app.component';
import FormComponent from './components/form/form.component';

@NgModule({
  declarations: [
  

  ],
  imports: [
    BrowserModule,
    FormsModule // Añade FormsModule a los imports
  ],
  providers: [],
  bootstrap: [ ]
})
export class AppModule { }
