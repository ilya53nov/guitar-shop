import { User } from '@project/shared-types';
import { Expose } from 'class-transformer';

export class LoggedUserRdo implements User {
  @Expose()
  id!: string;

  @Expose()
  name!: string;

  @Expose()
  email!: string;

  @Expose()
  role!: string;

  @Expose()
  token!: string;
}