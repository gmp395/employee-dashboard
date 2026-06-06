export function isValidPassword(password) {
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);

  return hasMinLength && hasNumber;
}