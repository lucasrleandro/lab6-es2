const { test } = require("@jest/globals");
const calc = require("./calculadora");

test("Operandos nao numericos", () => {
  expect(() => calc.soma(null, "abc")).toThrow("Operandos nao numericos");
});

test("Soma", () => {
  expect(calc.soma(2, 2)).toBe(4);
});

test("Sub", () => {
  expect(calc.sub(2, 2)).toBe(0);
});

test("Div", () => {
  expect(calc.div(10, 2)).toBe(5);
});

test("Div por zero", () => {
  expect(() => calc.div(2, 0)).toThrow("Divisao por zero");
});

test("Mult", () => {
  expect(calc.mult(5, 2)).toBe(10);
});

test("Raiz", () => {
  expect(calc.raiz(25)).toBe(5);
});

test("Raiz de negativo", () => {
  expect(() => calc.raiz(-25)).toThrow("Raiz de numero negativo");
});

test("Potencia", () => {
  expect(calc.expo(5, 2)).toBe(25);
});

test("Fatorial", () => {
  expect(calc.fat(5)).toBe(120);
});
