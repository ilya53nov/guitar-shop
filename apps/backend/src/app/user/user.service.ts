import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, fillObject, JwtConfig, UserRdo } from '@project/core';
import { User, UserRole } from '@project/shared-types';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

type PayloadJwtService = {
  sub: string,
  email: string,
  role: string,
};

type JwtToken = {
  accessToken: string,
}

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly jwtConfig: JwtConfig,    
  ) {}

  public async create(createUserDto: CreateUserDto) {
    const user = {...createUserDto, role: 'user', refreshTokenHash: '12'};

    const existUser = await this.userRepository.findByEmail(createUserDto.email);

    if (existUser) {
      throw new UnauthorizedException('Пользователь с данным e-mail существует');
    }

    const usertEntity = await new UserEntity(user)
      .setPassword(createUserDto.password);

    const newUser = await this.userRepository.create(usertEntity);

    const payload = this.getPayloadJwtService(newUser);

    const token = await this.getToken(payload);

    return fillObject(UserRdo, newUser);
  }

  private getPayloadJwtService(user: User): PayloadJwtService {
    return {
      sub: user.id,
      email: user.email,
      role: user.role,
    };    
  }

  private async getToken(payload: PayloadJwtService): Promise<JwtToken> {
    return {
      accessToken: await this.jwtService.signAsync(payload, await this.jwtConfig.getJwtAccessConfig()),
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }


}
