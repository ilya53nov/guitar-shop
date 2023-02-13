import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, fillObject, JwtConfig, LoginUserDto, UserRdo } from '@project/core';
import { User, UserRole } from '@project/shared-types';
import { AuthUserDescription } from './user.constants';
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
      throw new UnauthorizedException(AuthUserDescription.Exists);
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

  private async verifyUser(userDto: LoginUserDto) {
    const { email, password } = userDto;

    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new UnauthorizedException(AuthUserDescription.NotFound);
    }

    const taskUserEntity = new UserEntity(existUser);

    if (! await taskUserEntity.comparePassword(password)) {
      throw new UnauthorizedException(AuthUserDescription.PasswordWrong);
    }

    return taskUserEntity.toObject();
  }

  public async loginUser(loginTaskUserDto: LoginUserDto) {
    const user = await this.verifyUser(loginTaskUserDto);    

    const payload = this.getPayloadJwtService(user);

    const token = await this.getToken(payload);

    return token;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }


}
