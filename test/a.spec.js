import * as chai from 'chai';
import sum from '../src/a';

const assert = chai.assert;

describe('ObjA', () => {

	it('should pass a test', () => {
		const t = sum(5, 6);
		assert.equal(t, 11);
	});

	it('should fail a test', () => {
		const t = sum(5, 6);
		assert.equal(t, 11);
	});

});
