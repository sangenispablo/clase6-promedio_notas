import { genFirstLastName, genNota, Alumno } from "./utils.js";

function resolver() {
  const alumnos = [];

  let seguir = false;
  // n = cantidad de alumnos a generar
  let n;
  do {
    n = parseInt(prompt("Cantida de alumnos a generar para la simulación"));
    if (isNaN(n) || n <= 0) {
      alert("Error: Valores invalidos");
      seguir = true;
    } else {
      seguir = false;
    }
  } while (seguir);

  // ciclo para generar los objetos del array
  for (let i = 0; i < n; i++) {
    alumnos.push(
      new Alumno(genFirstLastName(), genNota(), genNota(), genNota())
    );
  }

  // recorro ahora el array con foreach
  alumnos.forEach((alumno) => {
    console.log(`${alumno.nombre} -- Promedio ${alumno.promedio().toFixed(2)} ${alumno.isAprobado()?'Aprobado':'Desaprobado'}`);
  });
}

// lo hago de esta forma por que cuando se pone module
// no puedo referenciar funciones en el html directamente
const boton = document.getElementById("boton");
boton.addEventListener("click", resolver);
