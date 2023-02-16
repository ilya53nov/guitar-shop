export interface Guitar {
  id?: string;
  title: string;
  description: string;
  createdAt?: Date;
  image: string;
  type: string;
  article: string;
  stringCount: number;
  rating?: number;
  price: number;
  reviewCount?: number;
}
