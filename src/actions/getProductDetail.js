
export const getProductDetail = (allProducts, product) => {
  return allProducts.find(prod => prod.title === product) || null;
} 