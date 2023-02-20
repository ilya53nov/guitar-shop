import { Guitar, GuitarString, GuitarType } from '@project/shared-types';
import { IsEnum, IsNumber, IsString, Length, Max, Min } from 'class-validator';
import { ProductValidation } from '../validation/product.validation';

export class CreateProductDto implements Guitar {
  @IsString()
  @Length(ProductValidation.TitleLength.min, ProductValidation.TitleLength.max)
  title!: string;

  @IsString()
  @Length(ProductValidation.DescriptionLength.min, ProductValidation.DescriptionLength.max)  
  description!: string;

  @IsString()
  image!: string;

  @IsEnum(GuitarType)
  type!: GuitarType;

  @IsString()
  @Length(ProductValidation.ArticleLength.min, ProductValidation.ArticleLength.max)  
  article!: string;

  @IsEnum(GuitarString)
  stringCount!: GuitarString;

  @IsNumber()
  @Min(ProductValidation.Price.min)
  @Max(ProductValidation.Price.max)
  price!: number;
}
