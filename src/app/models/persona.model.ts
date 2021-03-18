export class Persona {
    nombre: string;
    apellido: string;
    edad: number;
    direccion: string;
    telefono: string;
    formacion_superior: boolean;

    constructor(Nombre: string = '', Apellido: string = '', Edad: number = 0, Direccion: string = '', Telefono: string = '', Formacion_superior: boolean = false) {
        this.nombre = Nombre;
        this.apellido = Apellido;
        this.edad = Edad;
        this.direccion = Direccion;
        this.telefono = Telefono;
        this.formacion_superior = Formacion_superior;
    }
}
