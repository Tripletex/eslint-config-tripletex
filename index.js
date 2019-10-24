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
		"comma-dangle": "off",
		"indent": ["error", "tab", {
			"SwitchCase": 1
		}],
		"linebreak-style": "off",
		"max-len": "off",

		"no-restricted-properties": "off",
		"no-plusplus": "off",
		"no-tabs": "off",
		"no-trailing-spaces": "error",
		"no-use-before-define": ["error", {
			"functions": false,
			"classes": false,
			"variables": true
		}],

		"import/extensions": ["error", {
				"ts": "never",
				"tsx": "never"
			}
		],
		"import/no-extraneous-dependencies": "error",
		"import/prefer-default-export": "off",

		"jsx-a11y/no-autofocus": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		"jsx-a11y/no-static-element-interactions": "off",

		"react/jsx-filename-extension": ["warn", {
			"extensions": [
				".js",
				".jsx",
				".ts",
				".tsx"
			]
		}],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"react/require-default-props": "off",
		"react/sort-comp": "off",
	},
	"settings": {
		"import/resolver": {
			"node": {
				"extensions": [
					".js",
					".jsx",
					".ts",
					".tsx"
				]
			}
		}
	}
};