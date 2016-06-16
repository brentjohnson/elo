var _ = require('lodash');
var game = require('./scores');

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

var winner, loser;

// Iterate over each week
for (var w = 0; w < game.length; w++) {
	
	var startRank = _.pluck(player, 'elo');
	var gamesPlayed = {'BJ': 0, 'BK':0, 'JT':0, 'MP':0, 'TS': 0};

	var sumSa = {'BJ': 0, 'BK':0, 'JT':0, 'MP':0, 'TS': 0};
	var sumEa = {'BJ': 0, 'BK':0, 'JT':0, 'MP':0, 'TS': 0};

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

		sumSa[game[w][i][0]] += Sa;
		sumSa[game[w][i][1]] += 1-Sa;

		sumEa[game[w][i][0]] += (1 / (1 + Math.pow(10, (player2.elo - player1.elo)/400)));
		sumEa[game[w][i][1]] += (1 / (1 + Math.pow(10, (player1.elo - player2.elo)/400)));

		gamesPlayed[game[w][i][0]]++;
		gamesPlayed[game[w][i][1]]++;

	};

	// Print out results for the week
	for (p in sumEa) {
		console.log("Player "+p+" Performance: "+(sumSa[p]-sumEa[p])+" Expected: "+sumEa[p]+" Actual: "+sumSa[p]);
		player[p].elo += Math.round(32 * (sumSa[p] - sumEa[p]));
	}

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
