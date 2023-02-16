import { EnvValidationMessage, PortDB } from "@project/shared-types";
import { plainToInstance } from "class-transformer";
import { IsNumber, IsString, Max, Min, validateSync } from "class-validator";

class EnvironmentsConfig {
  @IsString({
    message: EnvValidationMessage.UploadDestinationRequired
  })
  public UPLOAD_DESTINATION: string;

  @IsString({
    message: EnvValidationMessage.JwtAccessSecretRequired
  })
  public JWT_ACCESS_SECRET: string;

  @IsString({
    message: EnvValidationMessage.HostRequired
  })
  public HOST: string;

  @IsNumber({}, {
    message: EnvValidationMessage.PortRequired
  })
  @Min(PortDB.Min)
  @Max(PortDB.Max)
  public PORT: number;  
}

export function validateEnvironments(config: Record<string, unknown>) {
  const environmentsConfig = plainToInstance(
    EnvironmentsConfig,
    config,
    { enableImplicitConversion: true  },
  );

  const errors = validateSync(
    environmentsConfig, {
      skipMissingProperties: false
    }
  );

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return environmentsConfig;
}