import validateEmail from './validateEmail';

describe('Validate Emails Testing', () => {
  test('test123@gmail.com should be true', () => {
    expect(validateEmail('test123@gmail.com')).toBe(true);
  });
  
  test('zcvfdl.com should be false', () => {
    expect(validateEmail('zcvfdl.com')).toBe(false);
  });

  test('zcvfdl@com should be false', () => {
    expect(validateEmail('zcvfdl@com')).toBe(false);
  });
});
