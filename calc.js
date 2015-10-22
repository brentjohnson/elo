

var player = {
	'eighty': {
		name: 'eighty',
		ewp: 80,
		wins: 0,
		losses: 0,
		elo: 1600
	},
	'seventy': {
		name: 'seventy',
		ewp: 70,
		wins: 0,
		losses: 0,
		elo: 1600
	},
	'fifty': {
		name: 'fifty',
		ewp: 50,
		wins: 0,
		losses: 0,
		elo: 1600
	},
	'thirty': {
		name: 'thirty',
		ewp: 30,
		wins: 0,
		losses: 0,
		elo: 1600
	},
	'twenty': {
		name: 'twenty',
		ewp: 20,
		wins: 0,
		losses: 0,
		elo: 1600
	}
};

var Xgame = [
	['ninety', 'sixty'],['fifty','twenty'],
	['ninety', 'fifty'],['sixty','twenty'],
	['ninety', 'twenty'],['fifty','sixty']
];
var game = [
	['seventy', 'twenty'],['fifty','thirty'],
	['eighty', 'twenty'],['seventy','thirty'],
	['eighty', 'thirty'],['seventy','fifty'],
	['eighty', 'fifty'],['thirty','twenty'],
	['eighty', 'seventy'],['fifty','twenty']
];

var winner, loser;

for (var x=0; x < 1000000; x++) {
	for (var i = game.length - 1; i >= 0; i--) {
		var player1 = player[game[i][0]];
		var player2 = player[game[i][1]];

		// Figure out who wins
		winner = Math.random() * (player1.ewp+player2.ewp) < player1.ewp ? player1 : player2;
		loser = (winner === player1) ? player2 : player1;

		// Update wins, losses
		winner.wins++;
		loser.losses++;

		// Update elo
		var Ea = 1 / (1 + Math.pow(10, (winner.elo - loser.elo)/400));

		winner.elo += Math.round(Ea * 32);
		loser.elo -= Math.round(Ea * 32);

	};
};

console.log(player);



