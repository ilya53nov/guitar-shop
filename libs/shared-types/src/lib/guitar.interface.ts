import { GuitarString } from './guitar-string.enum';
import { GuitarType } from './guitar-type.enum';

export interface Guitar {
  id?: string;
  title: string;
  description: string;
  createdAt?: Date;
  image: string;
  //type: GuitarType;
  type: string;
  article: string;
  //stringCount: GuitarString;
  stringCount: number;
  rating?: number;
  price: number;
  reviewCount?: number;
}
