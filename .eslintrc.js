module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [],
	rules: {
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		indent: ['error', 'tab'],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/prefer-default-export': 'off',
		'no-console': 'off',
		'func-names': 'off',
		'react/prop-types': 'off',
		'react/button-has-type': 'off',
		'react/jsx-props-no-spreading': 'off',
		'no-tabs': 'off',
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
		'jsx-a11y/role-supports-aria-props': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
	},
	ignorePatterns: ['public/*.js'],
};
