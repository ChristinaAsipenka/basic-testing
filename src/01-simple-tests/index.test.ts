// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({a: 3, b: 2, action: Action.Add});
    expect(result).toBe(5);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({a: 5, b:3, action: Action.Subtract});
    expect(result).toBe(2);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({a: 5, b:3, action: Action.Multiply});
    expect(result).toBe(15);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({a: 10, b:2, action: Action.Divide});
    expect(result).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({a: 15, b:2, action: Action.Exponentiate});
    expect(result).toBe(225);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({a: 15, b:2, action: 'invalidAction'});
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({a: 'E', b:2, action: Action.Add});
    expect(result).toBeNull();

    const result2 = simpleCalculator({ a: 2, b: null, action: Action.Add });
    expect(result2).toBeNull();

    const result3 = simpleCalculator({ a: 2, b: 3, action: null });
    expect(result3).toBeNull();
  });
});
