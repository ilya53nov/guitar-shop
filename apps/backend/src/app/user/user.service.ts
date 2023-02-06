import { Injectable } from '@nestjs/common';
import { CreateUserDto, fillObject, UserRdo } from '@project/core';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async create(createUserDto: CreateUserDto) {
    const user = {...createUserDto, role: 'user', refreshTokenHash: '12'};

    const usertEntity = await new UserEntity(user)
      .setPassword(createUserDto.password);

    const newUser = await this.userRepository.create(usertEntity);

    return fillObject(UserRdo, newUser);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }


}
