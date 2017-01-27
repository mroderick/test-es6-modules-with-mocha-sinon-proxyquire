import proxyquire from 'proxyquire';
import {assert} from 'referee';
import sinon from 'sinon';

const sandbox = sinon.sandbox.create();
const hiStub = sandbox.stub();

const sayHi = proxyquire('./say-hi', {
    './hi': {
        default: hiStub
    }
}).default;

describe('sayHi function', () => {
    it('should call dependency with "John"', () => {
        sayHi();

        sinon.assert.calledWith(hiStub, 'John');
    });

    it('should return the value from "hi"', () => {
        const expected = '31eb2d92-0a83-4d15-a0a0-c03e78c33912';

        hiStub.returns(expected);

        const actual = sayHi();

        assert.equals(actual, expected);
    });
});
