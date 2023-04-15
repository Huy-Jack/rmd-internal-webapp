export function totalPrice(productPriceList: Array<number>) {
  let sum = 0;
  for (const item of productPriceList) sum += item;
  return sum;
}

export function change(totalPrice: number, moneyReceived: number) {
  return moneyReceived - totalPrice;
}

export function checkPaymentValid(totalPrice: number, moneyReceived: number) {
  if (totalPrice <= moneyReceived && totalPrice >= 0) return 'valid';
  return 'invalid';
}

// input: xxx
// expectedOutput: xxx
