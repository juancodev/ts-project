import { products, addProduct, calcTotal } from './product.service';

addProduct({
  title: 'Shirt',
  createdAt: new Date(2022, 6, 10),
  stock: 1,
  size: 'S'
});

addProduct({
  title: 'Shoes',
  createdAt: new Date(2022, 6, 10),
  stock: 10,
});

console.log(products);

const result = calcTotal();
console.log(result);

