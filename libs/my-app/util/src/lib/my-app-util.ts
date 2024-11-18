import { v1 as uuid } from 'uuid';

export function generateUuid(): string {
  return uuid();
}