'use strict';
module.exports = {
	extends: 'airbnb/base',
	root: true,
	rules: {
		// use tabs only
		indent: [2, 'tab', { SwitchCase: 1 }],
		'no-tabs': [0],

		// use one space anywhere we allow space
		'no-multi-spaces': [2],

		// no spaces before a functions parameters.
		// good => `function add(a, b){ ... }`
		// bad => `function add (a, b){ ... }`
		'space-before-function-paren': [2],

		// error if we are reassigning function parameters,
		// allow reassigning props of parameters
		'no-param-reassign': [2, { 'props': false }],

		// warn when you don't dangle a comma in a multiline object or array def
		'comma-dangle': [1, 'always-multiline'],

		// use whatever block padding you want
		'padded-blocks': [0],

		// only provide a radix to parseInt if it is not 10
		radix: [2, 'as-needed'],

		// set max line length to a more reasonable number
		'max-len': [2, 120],
	},
	env: {
		browser: true,
		mocha: true,
	},
};
