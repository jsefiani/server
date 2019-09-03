/** 
 * ERROR Levels
  0 - Turn the rule off
	1 - Turn the rule on as a warning
	2 - Turn the rule on as an error
*/
module.exports = {
	env: {
		es6: true,
		node: true
	},
	extends: "eslint:recommended",
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module"
	},
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "windows"],
		quotes: ["error", "single"],
		semi: ["error", "always"],
		"no-console": [1]
	}
};
