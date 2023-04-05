import operate from './logic/operate';

describe('operate', () => {
  test('adds two numbers', () => {
    expect(operate('3', '5', '+')).toBe('8');
  });

  test('subtract two numbers', () => {
    expect(operate('4', '2', '-')).toBe('2');
  });

  test('multiply two numbers', () => {
    expect(operate('5', '5', '×')).toBe('25');
  });

  test('divdide two numbers', () => {
    expect(operate('6', '2', '÷')).toBe('3');
  });

  test('divdide by zero', () => {
    expect(operate('6', '0', '÷')).toBe('Can\'t divide by 0.');
  });

  test('modulus operation', () => {
    expect(operate('7', '2', '%')).toBe('1');
  });

  test('modulus operation by zero', () => {
    expect(operate('7', '0', '%')).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});
