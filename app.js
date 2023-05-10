const resultados = {
  operaciones: [],
};

function sumar() {
  const num1 = prompt("Ingresa el primer número:");
  const num2 = prompt("Ingresa el segundo número:");
  const resultado = parseInt(num1) + parseInt(num2);
  resultados.operaciones.push(`Suma: ${num1} + ${num2} = ${resultado}`);
  console.log(`El resultado de la suma es: ${resultado}`);
}

function restar() {
  const num1 = prompt("Ingresa el primer número:");
  const num2 = prompt("Ingresa el segundo número:");
  const resultado = parseInt(num1) - parseInt(num2);
  resultados.operaciones.push(`Resta: ${num1} - ${num2} = ${resultado}`);
  console.log(`El resultado de la resta es: ${resultado}`);
}

function multiplicar() {
  const num1 = prompt("Ingresa el primer número:");
  const num2 = prompt("Ingresa el segundo número:");
  const resultado = parseInt(num1) * parseInt(num2);
  resultados.operaciones.push(
    `Multiplicación: ${num1} * ${num2} = ${resultado}`
  );
  console.log(`El resultado de la multiplicación es: ${resultado}`);
}

function dividir() {
  const num1 = prompt("Ingresa el primer número:");
  const num2 = prompt("Ingresa el segundo número:");
  const resultado = parseInt(num1) / parseInt(num2);
  resultados.operaciones.push(`División: ${num1} / ${num2} = ${resultado}`);
  console.log(`El resultado de la división es: ${resultado}`);
}

function verResultados() {
  const operacion = prompt(
    "¿Qué operación quieres ver? (1: suma, 2: resta, 3: multiplicacion, 4: division)"
  );

  switch (operacion) {
    case "1":
      console.log(`Resultados de suma:`);
      resultados.operaciones.forEach((op) => {
        if (op.includes("Suma:")) {
          console.log(op);
        }
      });
      break;
    case "2":
      console.log(`Resultados de resta:`);
      resultados.operaciones.forEach((op) => {
        if (op.includes("Resta:")) {
          console.log(op);
        }
      });
      break;
    case "3":
      console.log(`Resultados de multiplicación:`);
      resultados.operaciones.forEach((op) => {
        if (op.includes("Multiplicación:")) {
          console.log(op);
        }
      });
      break;
    case "4":
      console.log(`Resultados de división:`);
      resultados.operaciones.forEach((op) => {
        if (op.includes("División:")) {
          console.log(op);
        }
      });
      break;
    default:
      console.log("Operación inválida");
      break;
  }
}

let opcion = 0;
while (opcion >= 0 && opcion <= 5) {
  opcion = parseInt(
    prompt(
      "¿Qué operación quieres hacer? (1: sumar, 2: restar, 3: multiplicar, 4: dividir, 5: ver resultados)"
    )
  );
  switch (opcion) {
    case 1:
      sumar();
      break;
    case 2:
      restar();
      break;
    case 3:
      multiplicar();
      break;
    case 4:
      dividir();
      break;
    case 5:
      verResultados();
      break;
    default:
      console.log("Operación inválida");
      break;
  }
}
