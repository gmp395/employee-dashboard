import { users } from "../data/db.local.js";
import { isValidPassword } from "./validators.js";

console.log("login.js cargado");

const passwordInput = document.querySelector("#password");
const togglePasswordButton = document.querySelector("#toggle-password");
const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#email");
const loginError = document.querySelector("#login-error");

togglePasswordButton.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";

  passwordInput.type = isHidden ? "text" : "password";
  togglePasswordButton.textContent = isHidden ? "Ocultar" : "Ver";
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  loginError.textContent = "";

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!isValidPassword(password)) {
    loginError.textContent =
      "La contraseña debe tener al menos 8 caracteres y contener al menos un número.";
    return;
  }

  const foundUser = users.find((user) => {
    return user.email === email && user.password === password;
  });

  if (foundUser) {
    localStorage.setItem("loggedUser", JSON.stringify(foundUser));
    window.location.href = "./dashboard.html";
  } else {
    loginError.textContent = "Email o contraseña incorrectos.";
  }
});