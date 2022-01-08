const { ftruncate } = require("fs");

function soma(n1, n2) {
  checaTipos(n1, n2);
  return n1 + n2;
}

function sub(n1, n2) {
  checaTipos(n1, n2);
  return n1 - n2;
}

function div(n1, n2) {
  checaTipos(n1, n2);
  if (n2 == 0) throw new Error("Divisao por zero");
  return n1 / n2;
}

function mult(n1, n2) {
  checaTipos(n1, n2);
  return n1 * n2;
}

function raiz(n1) {
  checaTipos(n1);

  if (n1 < 0) throw new Error("Raiz de numero negativo");

  return Math.sqrt(n1);
}

function expo(n1, n2) {
  checaTipos(n1, n2);
  return Math.pow(n1, n2);
}

function fat(n) {
  if (n === 1) return n;
  return n * fat(n - 1);
}

function checaTipos(n1, n2 = 0) {
  if (typeof n1 !== "number" || typeof n2 !== "number")
    throw new Error("Operandos nao numericos");
}

module.exports = {
  soma,
  sub,
  mult,
  div,
  raiz,
  expo,
  fat,
};
