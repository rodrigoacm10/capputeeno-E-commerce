export function formatValue(centsVal: number) {
  const realVal = centsVal / 100;
  return realVal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
