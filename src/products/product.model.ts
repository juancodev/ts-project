export type Size = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Size
};
