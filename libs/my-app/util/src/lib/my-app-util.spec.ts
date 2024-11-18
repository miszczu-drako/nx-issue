import { generateUuid } from './my-app-util';

describe('myAppUtil', () => {
  it('should work', () => {
    expect(generateUuid()).toHaveLength(36);
  });
});
