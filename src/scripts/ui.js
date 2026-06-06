export function renderEmployees(employees) {
  const employeesList = document.querySelector("#employees-list");

  employeesList.innerHTML = "";

  if (employees.length === 0) {
    employeesList.innerHTML =
      "<p>No se encontraron empleados con esa inicial.</p>";
    return;
  }

  employees.forEach((employee) => {
    const employeeCard = document.createElement("article");

    employeeCard.innerHTML = `
      <img
        src="https://i.pravatar.cc/150?img=${employee.id}"
        alt="Avatar de ${employee.name}"
      >

      <h3>${employee.name}</h3>

      <p><strong>Email:</strong> ${employee.email}</p>

      <p>
        <strong>Dirección:</strong>
        ${employee.address.street}, ${employee.address.suite}
      </p>

      <p><strong>Ciudad:</strong> ${employee.address.city}</p>

      <p><strong>Código postal:</strong> ${employee.address.zipcode}</p>
    `;

    employeesList.appendChild(employeeCard);
  });
}
export function renderLetterFilter(onLetterClick, onShowAllClick) {
  const letterFilter = document.querySelector("#letter-filter");

  letterFilter.innerHTML = "";

  const allButton = document.createElement("button");
  allButton.textContent = "Todos";

  allButton.addEventListener("click", () => {
    onShowAllClick();
  });

  letterFilter.appendChild(allButton);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  letters.forEach((letter) => {
    const button = document.createElement("button");

    button.textContent = letter;

    button.addEventListener("click", () => {
      onLetterClick(letter);
    });

    letterFilter.appendChild(button);
  });
}