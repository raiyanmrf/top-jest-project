export function capitalize(str) {
  if (typeof str !== "string") return false;
  return str[0].toUpperCase() + str.slice(1);
}
