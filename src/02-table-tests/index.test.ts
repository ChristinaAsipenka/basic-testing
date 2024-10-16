// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 5, b: 3, action: Action.Subtract, expected: 2 },
    { a: 6, b: 3, action: Action.Divide, expected: 2 },
    { a: 2, b: 3, action: Action.Multiply, expected: 6 },
    { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
];

const testCasesInvalid = [
  { a: 'not a number', b: 3, action: Action.Add },
  { a: 2, b: null, action: Action.Add },
  { a: 2, b: 3, action: null },
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test('should blah-blah', () => {
    expect(true).toBe(true);
  });

  test.each(testCases)('calculates $action of $a and $b', ({ a, b, action, expected }) =>{
    const result = simpleCalculator({a, b, action});
    expect(result).toBe(expected);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 2, b: 3, action: 'invalid' });
    expect(result).toBeNull();
  });

  test.each(testCasesInvalid)('should return null for invalid arguments ($a, $b, $action)', ({a, b, action})=>{
    const result = simpleCalculator({a, b, action});
    expect(result).toBeNull();
  })
});
