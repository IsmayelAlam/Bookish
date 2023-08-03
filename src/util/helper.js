export function namePadding(name, num) {
  const newName =
    name?.length > num ? name.slice(0, num).padEnd(num + 3, ".") : name;
  return newName;
}
