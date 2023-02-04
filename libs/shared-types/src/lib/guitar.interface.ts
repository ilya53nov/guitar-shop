import { GuitarString } from './guitar-string.enum';
import { GuitarType } from './guitar-type.enum';

export interface Guitar {
  id?: string;
  title: string;
  description: string;
  createdAt?: Date;
  image: string;
  type: GuitarType;
  article: string;
  stringCount: GuitarString;
  rating?: number;
  price: number;
  reviewCount?: number;
}
