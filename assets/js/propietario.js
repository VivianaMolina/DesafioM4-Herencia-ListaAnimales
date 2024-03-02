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

    // métodos “setters”
    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }
    set direccion(nuevo_direccion) {
        this._direccion = nuevo_direccion;
    }
    set telefono(nuevo_telefono) {
        return this._telefono = nuevo_telefono;
    }

    datosPropietario() {
        return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
    }
}