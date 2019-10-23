module.exports = {
	"env": {
		"es6": true
	},
	"extends": "eslint-config-airbnb",
	"parserOptions": {
		"ecmaVersion": 2019,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		},
	},
	"plugins": [
		"react",
		"import",
	],
	"rules": {
		"comma-dangle": 0,
		"indent": ["error", "tab", {
			"SwitchCase": 1
		}],
		"import/no-extraneous-dependencies": 0,
		"import/prefer-default-export": 0,
		"linebreak-style": 0,
		"max-len": ["error", {
			"code": 160
		}],
		"no-trailing-spaces": 2,
		"no-tabs": 0,

		"jsx-a11y/no-autofocus": 0,
		"jsx-a11y/click-events-have-key-events": 0,
		"jsx-a11y/no-static-element-interactions": 0,

		"react/jsx-filename-extension": [1, {
			"extensions": [".js", ".jsx"]
		}],
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/require-default-props": 0,
		"react/sort-comp": 0,
	}
};