module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/essential',
		'eslint:recommended'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'indent': ['error', 'tab'], // tab缩进
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'], // 字符串单引号
		'semi': ['error', 'always'], // 必须分号结尾
		'curly': 1, // 必须使用if() {} 的‘{}’
		'no-multiple-empty-lines': [2, {'max': 3}], //空行最多不能超过3行
		'space-before-function-paren': [2, 'never'], // 函数定义括号前的空格
		'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
