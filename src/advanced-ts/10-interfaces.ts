//type specific
type Size = 'S' | 'M' | 'L' | 'XL';
type PersonId = string | number;

// types
type Product = {
  id: string | number,
  title: string,
  createdAt: Date,
  stock: number,
  size?: Size
};

interface Products {
  id: string | number,
  title: string,
  createdAt: Date,
  stock: number,
  size?: Size
}

const products: Products[] = [];
products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90,
});

const addProduct = (data: Product) => {
  products.push(data);
}
