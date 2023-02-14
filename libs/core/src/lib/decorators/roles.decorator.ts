import { SetMetadata } from '@nestjs/common';
import { ParametrKey } from '@project/shared-types';

export const Roles = (...roles: string[]) => SetMetadata(ParametrKey.Roles, roles);
