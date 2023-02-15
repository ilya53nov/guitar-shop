import { Cart, User, UserInfo } from '@project/shared-types';
import { Expose } from 'class-transformer';

export class UserRdo implements User {
  @Expose()
  id!: string;

  @Expose()
  name!: string;

  @Expose()
  email!: string;

  @Expose()
  role!: string;

  @Expose()
  cart!: Cart[];

  @Expose({name: '_count'})
  userInfo!: UserInfo;
}
