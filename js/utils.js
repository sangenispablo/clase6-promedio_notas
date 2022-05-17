export function genFirstLastName() {
  const firstName = [
    "Adrián",
    "Agustín",
    "Alberto",
    "Alejandro",
    "Alexander",
    "Alexis",
    "Alonso",
    "Andrés Felipe",
    "Ángel",
    "Anthony",
    "Antonio",
    "Bautista",
    "Benicio",
    "Benjamín",
    "Carlos",
    "Carlos Alberto",
    "Carlos Eduardo",
    "Carlos Roberto",
    "César",
    "Cristóbal",
    "Daniel",
    "David",
    "Diego",
    "Dylan",
    "Eduardo",
    "Emiliano",
    "Emmanuel",
    "Enrique",
    "Erik",
    "Ernesto",
    "Ethan",
    "Fabián",
    "Facundo",
    "Felipe",
    "Félix",
    "Félix María",
    "Fernando",
    "Francisco",
    "Francisco Javier",
    "Gabriel",
    "Gaspar",
    "Gustavo Adolfo",
    "Hugo",
    "Ian",
    "Iker",
    "Isaac",
    "Jacob",
    "Javier",
    "Jayden",
    "Jeremy",
    "Jerónimo",
    "Jesús",
    "Jesús Antonio",
    "Jesús Víctor",
    "Joaquín",
    "Jorge",
    "Jorge  Alberto",
    "Jorge Luis",
    "José",
    "José Antonio",
    "José Daniel",
    "José David",
    "José Francisco",
    "José Gregorio",
    "José Luis",
    "José Manuel",
    "José Pablo",
    "Josué",
    "Juan",
    "Juan Ángel",
    "Juan Carlos",
    "Juan David",
    "Juan Esteban",
    "Juan Ignacio",
    "Juan José",
    "Juan Manuel",
    "Juan Pablo",
    "Juan Sebastián",
    "Julio",
    "Julio Cesar",
    "Justin",
    "Kevin",
    "Lautaro",
    "Liam",
    "Lian",
    "Lorenzo",
    "Lucas",
    "Luis",
    "Luis Alberto",
    "Luis Emilio",
    "Luis Fernando",
    "Manuel",
    "Manuel Antonio",
    "Marco Antonio",
    "Mario",
    "Martín",
    "Mateo",
    "Matías",
    "Maximiliano",
    "Maykel",
    "Miguel",
    "Miguel  ngel",
    "Nelson",
    "Noah",
    "Oscar",
    "Pablo",
    "Pedro",
    "Rafael",
    "Ramón",
    "Raúl",
    "Ricardo",
    "Rigoberto",
    "Roberto",
    "Rolando",
    "Samuel",
    "Samuel David",
    "Santiago",
    "Santino",
    "Santos",
    "Sebastián",
    "Thiago",
    "Thiago Benjamín",
    "Tomás",
    "Valentino",
    "Vicente",
    "Víctor",
    "Víctor Hugo",
  ];
  const lastName = [
    "Garcia",
    "Gonzalez",
    "Rodriguez",
    "Fernandez",
    "Lopez",
    "Martinez",
    "Sanchez",
    "Perez",
    "Gomez",
    "Martin",
    "Jimenez",
    "Ruiz",
    "Hernandez",
    "Diaz",
    "Moreno",
    "Alvarez",
    "Muñoz",
    "Romero",
    "Alonso",
    "Gutierrez",
    "Navarro",
    "Torres",
    "Dominguez",
    "Vazquez",
    "Ramos",
    "Gil",
    "Ramirez",
    "Serrano",
    "Blanco",
    "Suarez",
    "Molina",
    "Morales",
    "Ortega",
    "Delgado",
    "Castro",
    "Ortiz",
    "Rubio",
    "Marin",
    "Sanz",
    "Nuñez",
    "Iglesias",
    "Medina",
    "Garrido",
    "Santos",
    "Castillo",
    "Cortes",
    "Lozano",
    "Guerrero",
    "Cano",
    "Prieto",
    "Mendez",
    "Calvo",
    "Cruz",
    "Gallego",
    "Vidal",
    "Leon",
    "Herrera",
    "Marquez",
    "Peña",
    "Cabrera",
    "Flores",
    "Campos",
    "Vega",
    "Diez",
    "Fuentes",
    "Carrasco",
    "Caballero",
    "Nieto",
    "Reyes",
    "Aguilar",
    "Pascual",
    "Herrero",
    "Santana",
    "Lorenzo",
    "Hidalgo",
    "Montero",
    "Ibañez",
    "Gimenez",
    "Ferrer",
    "Duran",
    "Vicente",
    "Benitez",
    "Mora",
    "Santiago",
    "Arias",
    "Vargas",
    "Carmona",
    "Crespo",
    "Roman",
    "Pastor",
    "Soto",
    "Saez",
    "Velasco",
    "Soler",
    "Moya",
    "Esteban",
    "Parra",
    "Bravo",
    "Gallardo",
    "Rojas",
    "Pardo",
    "Merino",
    "Franco",
    "Espinosa",
    "Izquierdo",
    "Lara",
    "Rivas",
    "Silva",
    "Rivera",
    "Casado",
    "Arroyo",
    "Redondo",
    "Camacho",
    "Rey",
    "Vera",
    "Otero",
    "Luque",
    "Galan",
    "Montes",
    "Rios",
    "Sierra",
    "Segura",
    "Carrillo",
    "Marcos",
    "Marti",
    "Soriano",
    "Mendoza",
  ];
  const rand_first = Math.floor(Math.random() * firstName.length);
  const rand_last = Math.floor(Math.random() * lastName.length);
  return `${lastName[rand_last]}, ${firstName[rand_first]}`;
}

export function genNota() {
  return Math.floor(Math.random() * 10) + 1;
}

export class Alumno {
  constructor(nombre, n1, n2, n3) {
    this.nombre = nombre;
    this.n1 = n1;
    this.n2 = n2;
    this.n3 = n3;
  }
  promedio() {
    return (this.n1 + this.n2 + this.n3) / 3;
  }
  isAprobado() {
    return this.promedio() >= 6;
  }
}