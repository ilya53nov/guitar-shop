import { User } from './user.interface';

export interface Comment {
  id?: string;
  author?: User;
  rating?: number;
  text?: string;
  positive?: string;
  negative?: string;
  createdAt?: Date;
}
