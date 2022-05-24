import { genFirstLastName, genNota, Alumno } from "./utils.js";

// acceso al DOM
const tablaBody = document.querySelector("#tablabody");
const btnGenerar = document.querySelector("#btnGenerar");
const inputCantidad = document.querySelector("#inputCantidad");

// Array para cargar los datos con un objeto de la clase Alumno
let alumnos = [];

// ejecuto la funcion para generar la tabla
function start(cantidad) {
  // borro los alumnos y los vuelvo a generar
  alumnos = [];
  // n = cantidad de alumnos a generar
  let n = cantidad;
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

function eliminarFila(e) {
  const id = parseInt(e.target.parentElement.parentElement.dataset.id);
  const fila = e.target.parentElement.parentElement;
  // borro del array el elemento
  alumnos.splice(id, 1);
  // elimino de la tabla el elemento seleccionado
  if (fila.parentNode) {
    fila.parentNode.removeChild(fila);
  }
  // vuelvo a crear el element Table
  createHtml();
  console.log(alumnos);
}

function crearFila(elemento, index) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const btnBorrar = document.createElement("button");
  btnBorrar.innerText = "Borrar";
  btnBorrar.classList.add("btn", "btn-danger");
  btnBorrar.onclick = eliminarFila;
  let td;
  tr.classList.add(
    `${!elemento.isAprobado() ? "table-danger" : "table-success"}`
  );
  tr.setAttribute("data-id", index);
  tr.setAttribute("id", index);
  th.setAttribute("scope", "row");
  th.innerText = `${index + 1}`;
  tr.appendChild(th);
  td = document.createElement("td");
  td.innerText = `${elemento.nombre}`;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerText = `${elemento.n1}`;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerText = `${elemento.n2}`;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerText = `${elemento.n3}`;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerText = `${elemento.promedio().toFixed(2)}`;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerText = `${elemento.isAprobado() ? "Aprobado" : "Desaprobado"}`;
  tr.appendChild(td);
  td = document.createElement("td");
  td.appendChild(btnBorrar);
  tr.appendChild(td);
  return tr;
}

function createHtml() {
  // limpio el tablaBody
  limpiarHijos(tablaBody);
  // recorro ahora el array con foreach
  alumnos.forEach((alumno, index) => {
    const fila = crearFila(alumno, index);
    tablaBody.appendChild(fila);
  });
}

// agrego un evento para ejecutar star en el boton ///////////////////////////
btnGenerar.addEventListener("click", () => {
  // saco la cantidad de elementos del input
  const cantidad = parseInt(inputCantidad.value);
  start(cantidad);
});

inputCantidad.addEventListener("input", (e) => {
  const cantidad = parseInt(e.target.value);
  if (cantidad > 0) {
    btnGenerar.disabled = false;
  } else {
    btnGenerar.disabled = true;
  }
});

inputCantidad.addEventListener("change", (e) => {
  const cantidad = parseInt(e.target.value);
  if (cantidad > 0) {
    start(cantidad);
  }
});
