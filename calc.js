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
	]
];

var winner, loser;

// Iterate over each week
for (var w = 0; w < game.length; w++) {
	
	var startRank = _.pluck(player, 'elo');
	var gamesPlayed = {'BJ': 0, 'BK':0, 'JT':0, 'MP':0, 'TS': 0};

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

		var points = Math.round(32 * (Sa - Ea));

		player1.elo += points;
		player2.elo -= points;

		gamesPlayed[game[w][i][0]]++;
		gamesPlayed[game[w][i][1]]++;

		console.log(game[w][i]+' '+points)
	};

	var endRank = _.pluck(player, 'elo');
	var gp = [gamesPlayed['BJ'], gamesPlayed['BK'], gamesPlayed['JT'], gamesPlayed['MP'], gamesPlayed['TS']];

	var diff = endRank.map(function (num, idx) {
		return Math.round(((gp[idx] > 0) ? (num - startRank[idx])/gp[idx] : 0)*100)/100;
	}); 

	console.log(diff);
	console.log(endRank);

};

// Overall win %
_.map(player, 
	function(p) {
		p.win_percent = Math.round((p.wins+p.draws*0.5)/(p.wins+p.draws+p.losses)*10000)/100;
	});

console.log(player);
