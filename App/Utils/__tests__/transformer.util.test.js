import * as Utils from '../transformer.util';

describe('uppercase first letter', () => {
  it('Encoding data ', () => {
    const stringName = 'andiwijaya';
    const expected = 'Andiwijaya';
    expect(Utils.uppercaseFisrtLetter(stringName)).toEqual(expected);
  });
});