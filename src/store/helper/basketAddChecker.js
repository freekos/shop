export const basketAddChecker = (state, product) => {
  state.basket[product.id] = product;
  let json = JSON.stringify(state.basket)
  sessionStorage.setItem('basket', json)
}