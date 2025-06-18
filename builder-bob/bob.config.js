const targetPath = '../package'

module.exports = {
	source: `${targetPath}/src`,
	output: `${targetPath}/lib`,
	targets: [
		[
			'commonjs',
			{
				'esm': true,
			},
		],
		[
			'module',
			{
				'esm': true,
			},
		],
		[
			'typescript',
			{
				project: '../package/tsconfig.json',
				tsc: '../node_modules/typescript/bin/tsc',
			},
		],
	],
}
