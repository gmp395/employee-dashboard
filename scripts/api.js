const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

export async function getEmployees() {
  try {
    const response = await fetch(USERS_API_URL);

    if (!response.ok) {
      throw new Error("No se pudieron obtener los empleados");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al cargar empleados:", error);
    return [];
  }
}