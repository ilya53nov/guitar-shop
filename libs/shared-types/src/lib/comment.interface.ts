export interface Comment {
  id?: string;
  productId: string;
  authorId: string;
  rating: number;
  text: string;
  positive: string;
  negative: string;
  createdAt?: Date;
}
