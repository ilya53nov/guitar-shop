import { Entity } from '@project/core';
import { User } from '@project/shared-types';
import { hash, verify } from 'argon2';

export class UserEntity implements Entity<UserEntity, User>, User {
  public id?: string;
  public name: string;
  public email: string;
  public role: string;
  public passwordHash: string;

  constructor(user: User) {
    this.fillEntity(user);
  }

  public toObject(): UserEntity {
    return {...this};
  }

  private async getHash(hashString: string): Promise<string> {
    return await hash(hashString);
  }

  public async setPassword(password: string): Promise<UserEntity> {
    this.passwordHash = await this.getHash(password);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return await verify(this.passwordHash, password);
  }

  public fillEntity(entity: User): void {
    this.id = entity.id;
    this.name = entity.name;
    this.email = entity.email;
    this.role = entity.role;
    this.passwordHash = entity.passwordHash;
  }
}
