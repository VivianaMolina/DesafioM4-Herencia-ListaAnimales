import Propietario from './propietario.js';
import Animal from './animal.js';
import Mascota from './mascota.js';

document.getElementsByTagName("button")[0].addEventListener("click", (e) => {
    e.preventDefault();
    let mascota1 = new Mascota(document.getElementById("propietario").value,
        document.getElementById("direccion").value,
        document.getElementById("telefono").value,
        document.getElementById("tipo").value,
        document.getElementById("nombreMascota").value,
        document.getElementById("enfermedad").value);
    console.log(mascota1);

    const resultElemUl = document.getElementById('resultado').children[0];

    const listaDatosPropietario = document.createElement("li");
    const listaDatosMascota = document.createElement("li");

    listaDatosPropietario.innerHTML = mascota1.datosPropietario();
    listaDatosMascota.innerHTML = (mascota1.getTipoAnimal() + mascota1.getNombreEnfermedadMascota());
    resultElemUl.appendChild(listaDatosPropietario);
    resultElemUl.appendChild(listaDatosMascota);
})