import { getUuid } from './my-app-api';

describe('myAppApi', () => {
  it('should work', () => {
    expect(getUuid()).toHaveLength(36);
  });
});
