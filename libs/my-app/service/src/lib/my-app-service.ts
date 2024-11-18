import { pino } from 'pino';

export function printUuid(uuid: string): boolean {
  const logger = pino();
  logger.info(`UUID: ${uuid}`);
  return true;
}