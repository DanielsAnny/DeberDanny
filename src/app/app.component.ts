import { Component } from '@angular/core';
import { Persona } from './models/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deber';
  arrayPersonas: Persona[];
  nombre: string;
  apellido: string;
  edad: number;
  direccion: string;
  telefono: string;

  constructor() {
    this.nombre = '';
    this.apellido = '';
    this.edad = 0;
    this.direccion = '';
    this.telefono = '';
    this.arrayPersonas = [];
  }

  onPersonaisCreated($event): void {
    //this.arrPersonas.push($event);
    this.arrayPersonas.push(JSON.parse(JSON.stringify($event)));
  }

}
