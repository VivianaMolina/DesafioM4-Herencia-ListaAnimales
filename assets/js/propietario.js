export default class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    // métodos “getters” 
    get nombre() {
        return this._nombre;
    }
    get direccion() {
        return this._direccion;
    }
    get telefono() {
        return this._telefono;
    }

    datosPropietario() {
        return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
    }
}