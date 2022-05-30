// Import de funciones y clases
import { genFirstLastName, genNota, Alumno } from "./utils.js";

// acceso al DOM
const tablaBody = document.querySelector("#tablabody");
const btnGenerar = document.querySelector("#btnGenerar");
const btnBorrar = document.querySelector("#btnBorrar");
const inputCantidad = document.querySelector("#inputCantidad");
const divChart = document.querySelector("#divChart");

// Array para cargar los datos con un objeto de la clase Alumno
let alumnos = [];

function crearChart() {
  // obtengo los aprobados y desaprobados y los meto en un array
  const miData = [0, 0];
  alumnos.forEach((alumno) => {
    if (alumno.isAprobado()) {
      miData[0]++;
    } else {
      miData[1]++;
    }
  });
  console.log(miData);
  // borro el chart
  divChart.innerHTML = `<canvas id="myChart" width="400" height="400"></canvas>`;
  const ctx = document.getElementById("myChart").getContext("2d");
  let chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Aprobados", "Desaprobados"],
      datasets: [
        {
          label: "Grafica Estadisticas",
          backgroundColor: "rgb(0,0,0)",
          data: miData,
        },
      ],
    },
  });
}

// ejecuto la funcion para generar la tabla
function start(cantAlumnos) {
  // borro los alumnos y los vuelvo a generar
  alumnos = [];
  // ciclo para generar los objetos del array
  for (let i = 0; i < cantAlumnos; i++) {
    alumnos.push(
      new Alumno(genFirstLastName(), genNota(), genNota(), genNota())
    );
  }
  createHtml();
  crearChart();
}

function borrarHtml(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  btnBorrar.disabled = true;
}

function eliminarFila(e) {
  const id = parseInt(e.target.parentElement.parentElement.dataset.id);
  const fila = e.target.parentElement.parentElement;
  // borro del array el elemento
  alumnos.splice(id, 1);
  // elimino de la tabla el elemento seleccionado
  fila.parentNode ? fila.parentNode.removeChild(fila) : undefined;
  // vuelvo a crear el element Table
  createHtml();
}

function crearFila(elemento, index) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const btnBorrar = document.createElement("button");
  btnBorrar.innerText = "Eliminar";
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

  // <tr class="table-success" data-id="0" id="0">
  //   <th scope="row">1</th>
  //   <td>Alvarez, Santino</td>
  //   <td>10</td>
  //   <td>5</td>
  //   <td>5</td>
  //   <td>6.67</td>
  //   <td>Aprobado</td>
  //   <td><button class="btn btn-danger">Borrar</button></td>
  // </tr>
}

function viewToast(msg) {
  Toastify({
    text: msg,
    duration: 1500,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
  }).showToast();
}

function createHtml() {
  // limpio el tablaBody
  borrarHtml(tablaBody);
  // recorro ahora el array con foreach si tiene elementos
  btnBorrar.disabled = false;
  alumnos.length > 0
    ? alumnos.forEach((alumno, index) => {
        tablaBody.appendChild(crearFila(alumno, index));
      })
    : (btnBorrar.disabled = true);
  alumnos.length > 0
    ? viewToast(`Se generaron ${alumnos.length} registros`)
    : viewToast(`Ups ningun registro generado`);
}

// agrego un evento para ejecutar star en el boton ///////////////////////////
btnGenerar.addEventListener("click", () => {
  // saco la cantidad de elementos del input
  start(parseInt(inputCantidad.value));
});

btnBorrar.addEventListener("click", () => {
  borrarHtml(tablaBody);
  divChart.innerHTML = `<canvas id="myChart" width="400" height="400"></canvas>`;
});

inputCantidad.addEventListener("input", (e) => {
  parseInt(e.target.value) > 0
    ? (btnGenerar.disabled = false)
    : (btnGenerar.disabled = true);
});

inputCantidad.addEventListener("change", (e) => {
  parseInt(e.target.value) > 0
    ? (btnGenerar.disabled = false)
    : (btnGenerar.disabled = true);
});
