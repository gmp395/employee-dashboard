const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

export async function getEmployees() {
  const response = await fetch(USERS_API_URL);

  if (!response.ok) {
    throw new Error("No se pudieron obtener los empleados");
  }

  return response.json();
}