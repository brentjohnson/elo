var _ = require('lodash');

var player = {
	'BJ': {
		wins: 0,
		losses: 0,
		draws: 0,
		elo: 1600
	},
	'BK': {
		wins: 0,
		losses: 0,
		draws: 0,
		elo: 1600
	},
	'JT': {
		wins: 0,
		losses: 0,
		draws: 0,
		elo: 1600
	},
	'MP': {
		wins: 0,
		losses: 0,
		draws: 0,
		elo: 1600
	},
	'TS': {
		wins: 0,
		losses: 0,
		draws: 0,
		elo: 1600
	}
};

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
	]
];

var winner, loser;

// Iterate over each week
for (var w = 0; w < game.length; w++) {
	
	console.log(player);
	var startRank = _.pluck(player, 'elo');
	console.log(startRank);

	// Iterate over each game
	for (var i = 0; i < game[w].length; i++) {
		var player1 = player[game[w][i][0]];
		var player2 = player[game[w][i][1]];

		switch (game[w][i][2]) {
			case 'W':
				player1.wins++;
				player2.losses++;
				Sa = 1; // Actual outcome for P1
			break;
			case 'L':
				player1.losses++;
				player2.wins++;
				Sa = 0;
			break;
			case 'D':
				player1.draws++;
				player2.draws++;
				Sa = 0.5;
			break;
		}

		// Update elo
		var Ea = (1 / (1 + Math.pow(10, (player2.elo - player1.elo)/400)));

		var points = 32 * (Sa - Ea);

		player1.elo += Math.round(points);
		player2.elo -= Math.round(points);

	};
	var endRank = _.pluck(player, 'elo');
	console.log(endRank);

	var diff = endRank.map(function (num, idx) {
		return num - startRank[idx];
	}); 
	console.log(diff);
	
};

console.log(player);



