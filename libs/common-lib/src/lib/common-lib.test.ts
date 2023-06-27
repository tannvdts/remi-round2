import { commonLib, tryCatch } from './common-lib';

describe('commonLib', () => {
  it('should work', () => {
    expect(commonLib()).toEqual('common-lib');
  });
});

describe('tryCatch', () => {
  it('tryCatch should work with valid case', () => {
    expect(
      tryCatch(() => {
        return 'test';
      }, '')
    ).toEqual('test');
  });

  it('tryCatch should return default with fail case', () => {
    expect(
      tryCatch(() => {
        throw new Error();
      }, 'test')
    ).toEqual('test');
  });
});
