import { faker } from '@faker-js/faker';
import { addProduct, products, updateProduct, findProduct } from './products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.rgb({ prefix: '#' }),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid()
  });
}
const product = products[0];
updateProduct(product.id, {
  title: 'new object',
  stock: 80,
})

findProduct({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  tags: []
})

console.log(products);
