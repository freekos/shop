export const listMover = (allProducts, setPosition, size, type) => {
  if(type === 'next') {
    setPosition(prev => prev + size >= allProducts.length ? prev : prev + 1)
  }else {
    setPosition(prev => prev <= 0 ? 0 : prev - 1);
  }
}