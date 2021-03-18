import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  newPersona: Persona;
  @Output() personaisCreated: EventEmitter<Persona>;

  constructor() {
    this.newPersona = new Persona();
    this.personaisCreated = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.personaisCreated.emit(this.newPersona);
  }

}
