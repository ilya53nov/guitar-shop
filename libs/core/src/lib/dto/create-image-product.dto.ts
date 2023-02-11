import { ExeptionDescription } from "@project/shared-types";
import { Matches } from "class-validator";
import { ProductValidation } from "../validation/product.validation";

export class CreateImageProductDto {
  @Matches(ProductValidation.Image.fileType, { message: ExeptionDescription.InvalidImageType })
  image!: string;
}
