export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return {
    id: id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

const product1 = createProduct(1);
console.log(product1);

const product2 = createProduct(2, 5, false);
console.log(product2);
