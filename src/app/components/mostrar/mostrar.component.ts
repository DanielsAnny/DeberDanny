import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';

@Component({
  selector: 'app-muestra',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  @Input() arrayPersonas: Persona[];
  activo: boolean;
  boton: string;

  constructor() {
    this.activo = false;
    this.boton = 'Activar';
  }
  ngOnInit(): void {
  }
  onClick(estado: boolean, i: number): void{
    if(estado){
      estado = false;
      this.arrayPersonas[i].formacion_superior = estado;
      this.boton = 'Activar';
    }
    else{
      estado = true;
      this.arrayPersonas[i].formacion_superior = estado;
      this.boton = 'Desactivar';
    }
  }

}
