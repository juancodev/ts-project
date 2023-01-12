import { faker } from '@faker-js/faker';
import { ProductInterface } from './product.model'
import { CreateProductDto, UpdateProductDto, FindProduct } from './product.dto';


export const products: ProductInterface[] = [];

export const addProduct = (data: CreateProductDto): ProductInterface => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }

  }
  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (
  id: ProductInterface['id'],
  changes: UpdateProductDto
): ProductInterface => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  };
  return products[index];
}

export const findProduct = (dto: FindProduct): ProductInterface[] => {
  return products;
}

export const deleteProduct = (id: string) => {
  //code
}
