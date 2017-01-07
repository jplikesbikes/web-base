import * as chai from 'chai';
import add2 from '../src/b';

const assert = chai.assert;

describe('ObjB', () => {

	it('should pass a test', () => {
		const t = add2(5);
		assert.equal(t, 7);
	});

});
