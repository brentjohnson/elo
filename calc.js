

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
	'JX': {
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
	'TX': {
		wins: 0,
		losses: 0,
		draws: 0,
		elo: 1600
	}
};

var game = [
	[
		['MP', 'TX', 'D'],
		['BJ', 'BK', 'L'],
		['BK', 'TX', 'W'],
		['MP', 'JX', 'L'],
		['JX', 'BJ', 'D'],
		['BK', 'MP', 'L'],
		['BK', 'JX', 'W'],
		['BJ', 'TX', 'W']
	],
	[
		['BJ', 'MP', 'W'],
		['BK', 'BJ', 'L'],
		['TX', 'MP', 'D'],
		['BJ', 'TX', 'W'],
		['BK', 'JX', 'L'],
		['BK', 'TX', 'W'],
		['JX', 'MP', 'L']
	],
	[
		['BJ', 'TX', 'L'],
		['BK', 'MP', 'W'],
		['TX', 'JX', 'L'],
		['BJ', 'BK', 'D'],
		['JX', 'MP', 'W'],
		['BK', 'JX', 'W'],
		['MP', 'TX', 'L']
	]
];

var winner, loser;

// Iterate over each week
for (var w = 0; w < game.length; w++) {
	
	console.log(player);

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
		var Ea = (1 / (1 + Math.pow(10, (player1.elo - player2.elo)/400)));

		var points = 32 * (Sa - Ea);

		player1.elo += Math.round(points);
		player2.elo -= Math.round(points);

	};
};

console.log(player);



