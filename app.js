const calculadora = {
  sumar: function (num1, num2) {
    return num1 + num2;
  },
  restar: function (num1, num2) {
    return num1 - num2;
  },
  multiplicar: function (num1, num2) {
    return num1 * num2;
  },
  dividir: function (num1, num2) {
    return num1 / num2;
  },
};

const operaciones = ["sumar", "restar", "multiplicar", "dividir"];

const operacion = prompt(
  "¿Qué operación desea realizar? (sumar, restar, multiplicar o dividir)"
);
const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (operaciones.includes(operacion)) {
  const resultado = calculadora[operacion](num1, num2);
  alert(
    "El resultado de " +
      operacion +
      " " +
      num1 +
      " y " +
      num2 +
      " es: " +
      resultado
  );
} else {
  alert("La operación ingresada no es válida");
}
