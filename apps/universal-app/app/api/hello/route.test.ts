import { GET } from './route';
import 'isomorphic-fetch';

describe('Test api/hello', () => {
  test('Api return valid data', async () => {
    const response = await GET({} as Request);
    expect(response.status).toEqual(200);
    const result = await response.json();
    expect(result).toEqual({ message: 'hello' });
  });
});
