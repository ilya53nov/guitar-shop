import { Guitar } from './guitar.interface';

export interface Order {
  id?: string;
  guitar?: Guitar;
  price?: number;
  count?: number;
  sumPrice?: number;
  sumTotal?: number;
  countTotal?: number;
  date?: Date;
}
