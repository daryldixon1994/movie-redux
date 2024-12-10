export function increase(inputValue, x) {
  return { type: "Inc", payload: { inputValue, x } };
}
