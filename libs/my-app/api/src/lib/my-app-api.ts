import { generateUuid } from '@my-org/my-app-util'
import { printUuid } from '@my-org/my-app-service';

export function getUuid(): string {
  const uuid = generateUuid();
  printUuid(uuid);
  return uuid;
}