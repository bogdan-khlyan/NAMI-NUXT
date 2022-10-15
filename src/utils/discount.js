export function minusDiscount(cost, discount = 15) {
  const ratio = (100 - discount) / 100
  return Number.parseInt((cost * ratio).toFixed(0))
}
