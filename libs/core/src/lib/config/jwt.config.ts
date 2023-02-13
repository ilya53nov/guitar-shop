import { Injectable } from '@nestjs/common';
import {ConfigService, registerAs} from '@nestjs/config';
import {JwtModuleOptions, JwtSignOptions} from '@nestjs/jwt';

export const JWT_ACCESS_SECRET = 'jwt-access.secret';
export const JWT_ACCESS_DESCRIPTION = 'jwt-access';
const LIFE_ACCESS_TIME_TOKEN = '2000s';
const ENCRYPTION_ALGORITHM = 'HS256';

export const jwtAccessOptions = registerAs(JWT_ACCESS_DESCRIPTION, () => ({
  secret: process.env.JWT_ACCESS_SECRET,
}));

@Injectable()
export class JwtConfig {
  constructor(
    private readonly configService: ConfigService
  ) {}

  public async getJwtAccessConfig(): Promise<JwtSignOptions> {
    return {
      secret: this.configService.get<string>(JWT_ACCESS_SECRET),
      expiresIn: LIFE_ACCESS_TIME_TOKEN,
    }
  }
}

export async function getJwtOptions(): Promise<JwtModuleOptions> {
  return {
    signOptions: { algorithm: ENCRYPTION_ALGORITHM }
  }
}