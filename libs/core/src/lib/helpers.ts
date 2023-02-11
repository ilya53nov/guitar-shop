import { plainToInstance, ClassConstructor } from 'class-transformer'

export function fillObject<T, V>(someDto: ClassConstructor<T>, plainObject: V) {
  return plainToInstance(someDto, plainObject, { excludeExtraneousValues: true});
}

export function getAmqpConnectionString(user: string, password: string, host: string): string {
  return `amqp://${user}:${password}@${host}`;
}

export function getImageStaticPath(host: string, port: string, staticPath: string, image: string): string {
  return `http://${host}:${port}/${staticPath}/${image}`;
}
