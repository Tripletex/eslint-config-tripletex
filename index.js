module.exports = {
	"env": {
		"es6": true
	},
	"extends": "eslint-config-airbnb",
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true,
			"experimentalObjectRestSpread": true
		},
	},
	"plugins": [
		"react",
		"import",
	],
	"rules": {
		"no-trailing-spaces": 2,
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"react/jsx-indent": [2, "tab"],
		"no-tabs": 0,
		"import/no-extraneous-dependencies": 0,
		"react/jsx-indent-props": [2, "tab"],
		"react/sort-comp": 0,
		"react/require-default-props": 0,
		"comma-dangle": 0,
		"max-len": ["error", { "code": 160 }],
		"linebreak-style": 0,
		"import/prefer-default-export": 0,
		"jsx-a11y/no-autofocus": 0,
		"jsx-a11y/click-events-have-key-events": 0,
		"jsx-a11y/no-static-element-interactions": 0,
	}
};