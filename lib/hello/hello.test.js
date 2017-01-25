import {assert} from 'referee';
import hello from './hello';

describe('hello function', () => {
	it('should be a unary Function named "hello"', () => {
		assert.equals(hello.length, 1);
		assert.isFunction(hello);
		assert.equals(hello.name, 'hello');
	});
});