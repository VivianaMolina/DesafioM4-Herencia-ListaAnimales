import Animal from './animal.js';

export default class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota
        this._enfermedad = enfermedad
    }

    // métodos “getters” 
    get nombreMascota() {
        return this._nombreMascota;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    // métodos “setters”
    set nombreMascota(nombreMascota) {
        this._nombreMascota = nombreMascota;
    }

    set enfermedad(enfermedad) {
        this._nombreMascota = enfermedad;
    }

    getNombreEnfermedadMascota() {
        return `mientras que el nombre de la mascota es: ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}`;
    }
}