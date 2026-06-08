export function getLoggedUser() {
  const user = localStorage.getItem("loggedUser");

  return user ? JSON.parse(user) : null;
}

export function logout() {
  localStorage.removeItem("loggedUser");
}