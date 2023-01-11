import { Category } from './../categories/category.model';
import { BaseModel } from './../base.model';

export type Size = 'S' | 'M' | 'L' | 'XL';
export interface ProductInterface extends BaseModel {
  title: string;
  stock: number;
  size?: Size;
  category: Category;
}
