import { Category } from './../categories/category.model';
import { BaseModel } from './../base.model';

export type Size = 'S' | 'M' | 'L' | 'XL';
export interface ProductInterface extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Size;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}
