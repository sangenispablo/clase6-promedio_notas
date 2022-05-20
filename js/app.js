import { genFirstLastName, genNota, Alumno } from "./utils.js";

// capturo el id del body de la tabla
const tablaBody = document.querySelector("#tablabody");

// Array para cargar los datos con un objeto de la clase Alumno
const alumnos = [];

function inputN(cantidad) {
  let n;
  // bandera para validar
  let seguir = true;
  if (!cantidad) {
    seguir = true;
  } else {
    seguir = false;
    n = cantidad;
  }
  while (seguir) {
    n = parseInt(
      prompt("Cantidad de alumnos a generar para la simulación", 10)
    );
    if (isNaN(n) || n <= 0) {
      alert("Error: Valores invalidos");
      seguir = true;
    } else {
      seguir = false;
    }
  }
  return n;
}

// cambie un poco la funcion de la version anterior
// ahora si le paso un parametro no pide la cantidad
function start(cantidad) {

  // n = cantidad de alumnos a generar
  let n = inputN(cantidad);
  
  // ciclo para generar los objetos del array
  for (let i = 0; i < n; i++) {
    alumnos.push(
      new Alumno(genFirstLastName(), genNota(), genNota(), genNota())
    );
  }

  createHtml();
}

function limpiarHijos(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function crearFila(elemento, index) {
  return `
    <tr class="${!elemento.isAprobado() ? "table-danger" : "table-success"}">
      <th scope="row">${index}</th>
      <td>${elemento.nombre}</td>
      <td>${elemento.n1}</td>
      <td>${elemento.n2}</td>
      <td>${elemento.n3}</td>
      <td>${elemento.promedio().toFixed(2)}</td>
      <td>${elemento.isAprobado() ? "Aprobado" : "Desaprobado"}</td>
    </tr>
  `;
}

function createHtml() {
  // limpio el tablaBody
  limpiarHijos(tablaBody);

  // recorro ahora el array con foreach
  alumnos.forEach((alumno, index) => {
    const fila = crearFila(alumno, index + 1);
    tablaBody.innerHTML += fila;
  });
}

start();
