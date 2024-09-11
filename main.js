
// Variables con let
let nombre = "Pedro";
let edad = 30;
let esEstudiante = true;
let ciudad = "Colombia";
let hobbies = ["leer", "cocinar", "programar"];

// Variables con const
const PI = 3.14159;
const gravedad = 9.81;
const diasSemana = 7;
const coloresPrimarios = ["rojo", "verde", "azul"];
const mensajeBienvenida = "¡Hola!";


// Sin parámetros
const saludar = () => {
  console.log("Hola, mundo!");
};

// Con un parámetro
const saludarPorNombre = (nombre) => {
  console.log(`Hola, ${nombre}!`);
};

// Con dos o más parámetros
const calcularAreaRectangulo = (base, altura) => {
  return base * altura;
};

const esPar = (numero) => {
  return numero % 2 === 0;
};

const obtenerDiaSemana = (numeroDia) => {
  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  if (numeroDia >= 1 && numeroDia <= dias.length) {
    return dias[numeroDia - 1];
  } else {
    return "Número de día inválido";
  }
};

saludar();
saludarPorNombre("Ana");
console.log(calcularAreaRectangulo(5, 10));
console.log(esPar(4));
console.log(esPar(7));
console.log(obtenerDiaSemana(3));