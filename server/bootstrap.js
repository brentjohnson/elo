Meteor.startup(function () {
  if (Players.find().count() === 0) {

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
		]
	];


		// var _ = require('lodash');
		// var minimongo = require("minimongo");
		 
		// var LocalDb = minimongo.MemoryDb;
		 
		// // Create local db (in memory database with no backing) 
		// var db = new LocalDb();
		 
		// Add a collection to the database 
		// db.addCollection("events");
		// db.addCollection("players");
		// db.addCollection("ratingshistory");

		//doc = { species: "dog", name: "Bingo" };
		 
		// // Always use upsert for both inserts and modifies 
		// db.animals.upsert(doc, function() {
		//     // Success: 
		 
		//     // Query dog (with no query options beyond a selector) 
		//     db.animals.findOne({ species:"dog" }, {}, function(res) {
		//         console.log("Dog's name is: " + res.name);
		//     });
		// });

		// {
		// 	name: 'BJ',
		// 	rating: 1600,
		// 	wins: 0,
		// 	draws: 0,
		// 	losses: 0,
		// 	opponent: [{
		// 		name: 'BK',
		// 		wins: 0,
		// 		draws: 0,
		// 		losses: 0,
		// 	}]
		// }

		var getPlayer = function ( playerName ) {

			var player = Players.findOne({ name: playerName });

			if (!player) {
				Players.insert({ name: playerName, rating: 1600, wins: 0, draws: 0, losses: 0, opponent: [] });
				player = Players.findOne({ name: playerName });
			}

			return player;
		}

		var updatePlayer = function ( player ) {

			Players.update( {name: player.name}, {$set: {rating: player.rating, wins: player.wins, draws: player.draws, losses: player.losses}});
		}

		// for each week
			// create event
			// for each game
				// insert Game
				// add p1 to event if needed (start/end rating)
				// update event for p1
				// update Rating p1
				// insert RatingHistory p1
				// add p2 to event if needed (start/end rating)
				// update event for p2
				// update Rating p2
				// insert RatingHistory p2

		// Iterate over each week
		for (var w = 0; w < game.length; w++) {
			
			// getEvent()
			// var eventt = { eventId: w, startRating: [], endRating: [] };

			// db.events.upsert( eventt );

			// var startRank = _.pluck(player, 'elo');
			// var gamesPlayed = {'BJ': 0, 'BK':0, 'JT':0, 'MP':0, 'TS': 0};

			// Iterate over each game
			for (var i = 0; i < game[w].length; i++) {

				var player1 = getPlayer( game[w][i][0] );
				var player2 = getPlayer( game[w][i][1] );


		console.log('==========DONE=============');

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
				var Ea = (1 / (1 + Math.pow(10, (player2.rating - player1.rating)/400)));

				var points = Math.round(32 * (Sa - Ea));

				player1.rating += points;
				player2.rating -= points;

			//	gamesPlayed[game[w][i][0]]++;
			//	gamesPlayed[game[w][i][1]]++;

				updatePlayer( player1 );
				updatePlayer( player2 );

				console.log(game[w][i]+' '+points)
			};

			// var endRank = _.pluck(player, 'rating');
			// var gp = [gamesPlayed['BJ'], gamesPlayed['BK'], gamesPlayed['JT'], gamesPlayed['MP'], gamesPlayed['TS']];

			// var diff = endRank.map(function (num, idx) {
			// 	return Math.round(((gp[idx] > 0) ? (num - startRank[idx])/gp[idx] : 0)*100)/100;
			// }); 

			// console.log(diff);
			// console.log(endRank);

		};

		// Overall win %
		// _.map(player, 
		// 	function(p) {
		// 		p.win_percent = Math.round((p.wins+p.draws*0.5)/(p.wins+p.draws+p.losses)*10000)/100;
		// 	});

		// console.log(player);
	}
});