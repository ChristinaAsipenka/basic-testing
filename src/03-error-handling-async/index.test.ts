// Uncomment the code below and write your tests
import {throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError} from './index';

const resolveValueTestCases = [
    {value: 42, expected: 42},
    {value: 'hello', expected: 'hello'},
    {value: null, expected: null},
    {value: undefined, expected: undefined},
];

describe('resolveValue', () => {
    test.each(resolveValueTestCases)('should resolve provided value', async ({value, expected}) => {
        const result = await resolveValue(value);
        expect(result).toBe(expected);
    });
});

const throwErrorTestCases = [
    {msg: 'Custom error message', expected: 'Custom error message'},
    {msg: undefined, expected: 'Oops!'},
];

describe('throwError', () => {
    test.each(throwErrorTestCases)('should throw error with provided message', ({msg, expected}) => {
        expect(() => throwError(msg)).toThrow(expected);
    });

    test('should throw error with default message if message is not provided', () => {
        const msg = undefined;
        const expected = 'Oops!';
        expect(() => throwError(msg)).toThrow(expected);
    });
});

describe('throwCustomError', () => {
    test('should throw custom error', () => {
        expect(() => throwCustomError()).toThrow(MyAwesomeError);
        expect(() => throwCustomError()).toThrow('This is my awesome custom error!');
    });
});

describe('rejectCustomError', () => {
    test('should reject custom error', async () => {
        await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
    });
});
