import {assert} from 'referee';
import hello from './hello';

describe('hello function', () => {
	it('should be a unary Function named "hello"', () => {
		assert.equals(hello.length, 1);
		assert.isFunction(hello);
		assert.equals(hello.name, 'hello');
	});

    it('should return a String consisting of "hello" and the name argument', () => {
        const name = '8b9f18eb-1ea4-49ab-aefb-6a7fe7dcb315';
        const expected = `hello ${name}`;
        const actual = hello(name);

        assert.equals(actual, expected);
    });
});
