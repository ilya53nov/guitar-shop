import { Guitar, GuitarString, GuitarType } from '@project/shared-types';
import { IsEnum, IsNumber, IsOptional, Length, Max, Min } from 'class-validator';
import { ProductValidation } from '../validation/product.validation';

export class UpdateProductDto implements Guitar {
  @IsOptional()
  @Length(ProductValidation.TitleLength.min, ProductValidation.TitleLength.max)
  title!: string;

  @IsOptional()
  @Length(ProductValidation.DescriptionLength.min, ProductValidation.DescriptionLength.max)  
  description!: string;

  @IsOptional()
  image!: string;

  @IsOptional()
  @IsEnum(GuitarType)
  type!: GuitarType;

  @IsOptional()
  @Length(ProductValidation.ArticleLength.min, ProductValidation.ArticleLength.max)  
  article!: string;

  @IsOptional()
  @IsEnum(GuitarString)
  stringCount!: GuitarString;

  @IsOptional()
  @IsNumber()
  @Min(ProductValidation.Price.min)
  @Max(ProductValidation.Price.max)
  price!: number;
}