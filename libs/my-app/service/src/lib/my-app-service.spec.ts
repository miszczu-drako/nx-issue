import { printUuid } from './my-app-service';

describe('myAppService', () => {
  it('should work', () => {
    expect(printUuid('uuid')).toBe(true);
  });
});
