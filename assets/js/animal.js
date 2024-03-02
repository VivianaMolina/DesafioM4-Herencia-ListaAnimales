import Propietario from './propietario.js';
export default class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }

    // método “getters” 
    get tipo() {
        return this._tipo;
    }

    getTipoAnimal() {
        return `El tipo de animal es un: ${this.tipo}, `;
    }
}
