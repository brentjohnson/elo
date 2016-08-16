
var game = [
	[
		['MP', 'TS', 'D'],
		['BJ', 'BK', 'L'],
		['BK', 'TS', 'W'],
		['MP', 'JT', 'L'],
		['JT', 'BJ', 'D'],
		['BK', 'MP', 'L'],
		['BK', 'JT', 'W'],
		['BJ', 'TS', 'W']
	],
	[
		['BJ', 'MP', 'W'],
		['BK', 'BJ', 'L'],
		['TS', 'MP', 'D'],
		['BJ', 'TS', 'W'],
		['BK', 'JT', 'L'],
		['BK', 'TS', 'W'],
		['JT', 'MP', 'L']
	],
	[
		['BJ', 'TS', 'L'],
		['BK', 'MP', 'W'],
		['TS', 'JT', 'L'],
		['BJ', 'BK', 'D'],
		['JT', 'MP', 'W'],
		['BK', 'JT', 'W'],
		['MP', 'TS', 'L']
	],
	[
		['BJ', 'TS', 'W'],
		['MP', 'BK', 'L'],
		['MP', 'TS', 'W'],
		['BJ', 'BK', 'L'],
		['BK', 'TS', 'W'],
		['BJ', 'MP', 'L']
	],
	[
		['BJ', 'MP', 'W'],
		['BK', 'TS', 'L'],
		['BJ', 'TS', 'W'],
		['BK', 'MP', 'L'],
		['BJ', 'JT', 'W'],
		['MP', 'TS', 'L'],
		['BJ', 'BK', 'L'],
		['MP', 'JT', 'W']
	],
	[
		['BJ', 'BK', 'D'],
		['MP', 'TS', 'W'],
		['BJ', 'MP', 'L'],
		['BK', 'TS', 'W'],
		['BJ', 'TS', 'W'],
		['MP', 'BK', 'W']
	],
	[
		['BJ', 'BK', 'D'],
		['MP', 'TS', 'W'],
		['BJ', 'TS', 'L'],
		['MP', 'JT', 'W'],
		['BK', 'JT', 'W'],
		['BJ', 'MP', 'D'],
		['JT', 'TS', 'W'],
		['MP', 'BK', 'W']
	],
	[
		['BJ', 'BK', 'L'],
		['MP', 'JT', 'W'],
		['BJ', 'MP', 'W'],
		['BK', 'JT', 'W'],
		['BK', 'MP', 'W'],
		['JT', 'BJ', 'W']
	],
	[
		['BJ', 'TS', 'W'],
		['BK', 'JT', 'W'],
		['BK', 'TS', 'W'],
		['MP', 'JT', 'W'],
		['BK', 'BJ', 'W'],
		['MP', 'BJ', 'W'],
		['JT', 'TS', 'W'],
		['BK', 'MP', 'L'],
		['BJ', 'JT', 'W']
	],
	[
		['BK', 'MP', 'W'],
		['BJ', 'TS', 'D'],
		['BJ', 'MP', 'W'],
		['BK', 'TS', 'W'],
		['BJ', 'BK', 'W'],
		['MP', 'TS', 'W']
	],
	[
		['BJ', 'BK', 'W'],
		['MP', 'JT', 'W'],
		['BJ', 'TS', 'W'],
		['MP', 'BK', 'W'],
		['BJ', 'JT', 'D'],
		['MP', 'TS', 'L'],
		['JT', 'BK', 'W'],
		['JT', 'TS', 'W'],
		['MP', 'BJ', 'W']
	],
	[
		['BJ', 'BK', 'W'],
		['BJ', 'JT', 'D'],
		['BK', 'JT', 'D']
	],
	[
		['BJ', 'BK', 'L'],
		['MP', 'TS', 'L'],
		['BJ', 'MP', 'L'],
		['BK', 'TS', 'W'],
		['BJ', 'TS', 'W'],
		['BK', 'MP', 'L']
	],
	[
		['BJ', 'BK', 'D'],
		['BK', 'MP', 'W'],
		['BJ', 'MP', 'W']
	],
	[
		['BK', 'BJ', 'W'],
		['MP', 'BJ', 'W'],
		['TS', 'BK', 'L'],
		['TS', 'BJ', 'W'],
		['MP', 'BK', 'D'],
		['TS', 'MP', 'L']
	],
	[
		['BJ', 'MP', 'W'],
		['BK', 'TS', 'W'],
		['BJ', 'JT', 'W'],
		['JT', 'TS', 'W'],
		['BK', 'MP', 'W'],
		['BJ', 'TS', 'W'],
		['BK', 'BJ', 'W'],
		['MP', 'JT', 'W'],
		['MP', 'TS', 'W']
	],
	[
		['BJ', 'TS', 'L'],
		['MP', 'BK', 'W'],
		['BJ', 'BK', 'W'],
		['TS', 'MP', 'L'],
		['MP', 'BJ', 'W'],
		['BK', 'TS', 'W']
	],
	[
		['MP', 'BJ', 'W'],
		['MP', 'BK', 'W'],
		['BJ', 'BK', 'W']
	],
	[
		['BJ', 'JT', 'W'],
		['BK', 'TS', 'D'],
		['BK', 'BJ', 'W'],
		['JT', 'TS', 'W'],
		['BJ', 'TS', 'W'],
		['BK', 'JT', 'W']
	],
	[
		['BJ', 'MP', 'W'],
		['BK', 'BJ', 'W'],
		['BK', 'MP', 'W']
	],
	[
		['BJ', 'BK', 'W'],
		['TS', 'JT', 'D'],
		['BJ', 'MP', 'L'],
		['TS', 'BK', 'W'],
		['JT', 'MP', 'L'],
		['BJ', 'TS', 'W'],
		['BK', 'MP', 'L']
	],
	[
		['BJ', 'MP', 'D'],
		['BK', 'MP', 'W'],
		['BK', 'BJ', 'W']
	],
	[
		['BJ', 'TS', 'W'],
		['MP', 'JT', 'W'],
		['BK', 'JT', 'L'],
		['MP', 'TS', 'L'],
		['MP', 'BJ', 'W'],
		['BK', 'TS', 'W'],
		['JT', 'BJ', 'L'],
		['MP', 'BK', 'L'],
		['JT', 'TS', 'W']

	],
	[
		['TS', 'BK', 'W'],
		['TS', 'MP', 'W'],
		['TS', 'JT', 'L'],
		['MP', 'BK', 'W'],
		['MP', 'JT', 'W'],
		['BK', 'JT', 'W']
	],
	[
		['BJ', 'BK', 'W'],
		['BK', 'MP', 'W'],
		['BJ', 'MP', 'L']
	],
	[
		['BJ', 'MP', 'W']
	],
	[
		['BJ', 'MP', 'W'],
		['TS', 'BK', 'W'],
		['BJ', 'BK', 'L'],
		['MP', 'TS', 'L'],
		['BJ', 'TS', 'W'],
		['BK', 'MP', 'L']
	],
	[
		['BJ', 'MP', 'W']
	],
	[
		['BJ', 'BK', 'W'],
		['TS', 'MP', 'W'],
		['TS', 'BJ', 'L'],
		['BK', 'MP', 'L'],
		['BJ', 'MP', 'W'],
		['TS', 'BK', 'W']
	],
	[
		['BJ', 'MP', 'W'],
		['JT', 'BK', 'W'],
		['BJ', 'BK', 'W'],
		['JT', 'MP', 'W'],
		['JT', 'BJ', 'D'],
		['MP', 'BK', 'W']
	],
	[
		['BJ', 'BK', 'W'],
		['JT', 'TS', 'W'],
		['MP', 'BJ', 'W'],
		['BK', 'JT', 'D'],
		['MP', 'TS', 'W'],
		['BJ', 'JT', 'W'],
		['BK', 'MP', 'W'],
		['TS', 'BK', 'L']
	],
	[
		['BK', 'MP', 'W'],
		['BK', 'TS', 'W'],
		['BK', 'JT', 'W'],
		['JT', 'TS', 'W'],
		['JT', 'MP', 'W'],
		['TS', 'MP', 'W']
	],
	[
		['BK', 'MP', 'L'],
		['BK', 'TS', 'L'],
		['BK', 'JT', 'L'],
		['JT', 'TS', 'L'],
		['JT', 'MP', 'L'],
		['TS', 'MP', 'L']
	],
	[
		['BJ', 'BK', 'W']
	],
	[
		['BJ', 'BK', 'W'],
		['MP', 'BJ', 'W'],
		['MP', 'BK', 'W']
	],
	[
		['BK', 'BJ', 'W'],
		['MP', 'TS', 'W'],
		['MP', 'BJ', 'W'],
		['BK', 'TS', 'W'],
		['BJ', 'TS', 'W'],
		['BK', 'MP', 'W']
	]
];

module.exports = game;
