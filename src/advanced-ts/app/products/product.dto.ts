import { ProductInterface } from "./product.model";
// type with DTO
//type CreateProductDto = Omit<ProductInterface, 'id' | 'createdAt' | 'updatedAt' | 'category'>

// Omit
export interface CreateProductDto extends Omit<ProductInterface, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// Pick
type PickType = Pick<ProductInterface, 'id' | 'createdAt'>

// Partial
export interface UpdateProductDto extends Partial<CreateProductDto> { }

// Required
type RiqueredType = Required<ProductInterface>

// Readonly<Partial>
export interface FindProduct extends Readonly<Partial<Omit<ProductInterface, 'tags'>>> {
  readonly tags: ReadonlyArray<string>
}
