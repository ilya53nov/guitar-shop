import { User } from '@project/shared-types';
import { Expose } from 'class-transformer';

export class UserRdo implements User {
  @Expose()
  id!: string;

  @Expose()
  name!: string;

  @Expose()
  email!: string;
}
