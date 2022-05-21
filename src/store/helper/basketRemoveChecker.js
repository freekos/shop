export const basketRemoveChecker = (state, product) => {
  if(product.id in state.basket) {
    if(product.amount === 0) {
      delete state.basket[product.id];
    }else {
      state.basket[product.id] = product;
    }
  }

  let json = JSON.stringify(state.basket)
  sessionStorage.setItem('basket', json);
}