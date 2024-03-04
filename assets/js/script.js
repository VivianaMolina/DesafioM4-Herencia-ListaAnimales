import Mascota from './mascota.js';

document.getElementsByTagName("button")[0].addEventListener("click", (e) => {
    e.preventDefault();
    let propietario = document.getElementById("propietario").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let tipo = document.getElementById("tipo").value;
    let nombreMascota = document.getElementById("nombreMascota").value;
    let enfermedad = document.getElementById("enfermedad").value;


    if (tipo === 'perro') {
        let perro = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
        resultado(perro);
    } else if (tipo === 'gato') {
        let gato = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
        resultado(gato);
    } else if (tipo === 'conejo') {
        let conejo = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
        resultado(conejo);
    } else {
        alert("Mascota no valida");
    }

})

function resultado(valor) {
    const resultElemUl = document.getElementById('resultado').children[0];
    resultElemUl.innerHTML = "";
    const listaDatosPropietario = document.createElement("li");
    const listaDatosMascota = document.createElement("li");

    listaDatosPropietario.innerHTML = valor.datosPropietario();
    listaDatosMascota.innerHTML = (valor.tipo + valor.getNombreEnfermedadMascota());
    resultElemUl.appendChild(listaDatosPropietario);
    resultElemUl.appendChild(listaDatosMascota);
}

