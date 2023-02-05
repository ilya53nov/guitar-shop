export interface Comment {
  id?: string;
  authorId?: string;
  productId?: string;
  rating?: number;
  text?: string;
  positive?: string;
  negative?: string;
  createdAt?: Date;
}
