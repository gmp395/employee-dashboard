import { getLoggedUser, logout } from "./auth.js";
import { getEmployees } from "./api.js";
import { renderEmployees, renderLetterFilter } from "./ui.js";

const loggedUser = getLoggedUser();

if (!loggedUser) {
  window.location.href = "./index.html";
}

const logoutButton = document.querySelector("#logout-button");

logoutButton.addEventListener("click", () => {
  logout();
  window.location.href = "./index.html";
});

const employees = await getEmployees();

renderEmployees(employees);

renderLetterFilter(
  (selectedLetter) => {
    const filteredEmployees = employees.filter((employee) => {
      return employee.name.startsWith(selectedLetter);
    });

    renderEmployees(filteredEmployees);
  },
  () => {
    renderEmployees(employees);
  }
);