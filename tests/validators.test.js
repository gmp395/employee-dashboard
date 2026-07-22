import { describe, expect, test } from "vitest";
import { isValidEmail, isValidPassword } from "../scripts/validators.js";

describe("Validaciones del formulario de login", () => {
  test("valida un email correcto", () => {
    expect(isValidEmail("admin@paneladmin.com")).toBe(true);
  });

  test("rechaza un email incorrecto", () => {
    expect(isValidEmail("adminpaneladmin.com")).toBe(false);
  });

  test("valida una contraseña con mínimo 8 caracteres y un número", () => {
    expect(isValidPassword("Admin123")).toBe(true);
  });

  test("rechaza una contraseña sin números", () => {
    expect(isValidPassword("Adminaaa")).toBe(false);
  });
});