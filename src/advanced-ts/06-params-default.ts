export const createProduct = (
  id: string | number,
  stock: number = 10,
  isNew: boolean = true
) => {
  return {
    id: id,
    stock: stock,
    isNew: isNew
  };
};

const product1 = createProduct(1);
console.log(product1);

const product2 = createProduct(2, 5, false);
console.log(product2);
