export const amountChecker = (id, amount) => {
  if(amount > 99) {
    amount = 99;
  }
  if(amount < 0) {
    amount = 0;
  }

  return { id, amount };
}