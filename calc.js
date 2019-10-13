var games = require('./scores')

var players = {}
var weekNumber = 0;

function getPlayer (name) {
  return players[name] || (players[name] = {
    name: name,
    wins: 0,
    losses: 0,
    draws: 0,
    elo: 1600,
    // Temporary vars
    previousElo: 1600,
    gamesPlayed: 0,
    sumSa: 0,
    sumEa: 0,
    diff: 0
  })
}
// Iterate over each week
for (var week = 0; week < games.length; week++) {
  weekNumber++
  console.log('Week number: ' + weekNumber)
  // var startRank = _.map(player, 'elo')

  // This generates an object with each player names as keys and 0 as value
  // { Brent: 0, Brian: 0 }
  // var playersZero = {};
  // Object.keys(player).forEach(function (k) {playersZero[k] = 0 })

  // Initialize various accumulators
  // Can these just be created on the fly?
  // var gamesPlayed = Object.assign({}, playersZero)
  // var sumSa = Object.assign({}, playersZero)
  // var sumEa = Object.assign({}, playersZero)

  // Reset accumulators for weekly totals
  for (var p in players) {
    players[p].previousElo = players[p].elo
    players[p].gamesPlayed = 0
    players[p].sumSa = 0
    players[p].sumEa = 0
    players[p].diff = 0
  }

  // Iterate over each game
  for (var i = 0; i < games[week].length; i++) {
    var p1name = games[week][i][0]
    var p2name = games[week][i][1]

    var player1 = getPlayer(p1name)
    var player2 = getPlayer(p2name)
    var Sa = 0

    switch (games[week][i][2]) {
      case 'W':
        player1.wins++
        player2.losses++
        Sa = 1 // Actual outcome for P1
        break
      case 'L':
        player1.losses++
        player2.wins++
        Sa = 0
        break
      case 'D':
        player1.draws++
        player2.draws++
        Sa = 0.5
        break
    }

    player1.sumSa += Sa
    player2.sumSa += 1 - Sa

    player1.sumEa += (1 / (1 + Math.pow(10, (player2.elo - player1.elo) / 400)))
    player2.sumEa += (1 / (1 + Math.pow(10, (player1.elo - player2.elo) / 400)))

    player1.gamesPlayed++
    player2.gamesPlayed++
  };

  // Sortable array of participants for the week.
  var results = []

  // Calc ELO for the week
  for (p in players) {
    if (players[p].gamesPlayed > 0) {
      players[p].elo += Math.round(32 * (players[p].sumSa - players[p].sumEa))
      players[p].diff = Math.round(((players[p].elo - players[p].previousElo) / players[p].gamesPlayed) * 100) / 100
      results.push(players[p])
    }
  }

  // Sort by average change in rank
  results = results.sort(function (a, b) { return b.diff - a.diff })

  results.forEach(item => console.log(item.name + ' ' + item.diff))

  // Convert to array so we can sort
  /*
    var results = Object.values(player).sort(function(a, b){
      return (a.elo - a.previousElo) - (b.elo - b.previousElo)
    })

    for (p in players) {
      if (players[p].gamesPlayed > 0) {
        console.log('Player ' + p + ' Performance: ' + (players[p].sumSa - players[p].sumEa) + ' Games played: ' + players[p].gamesPlayed + ' Expected: ' + players[p].sumEa + ' Actual: ' + players[p].sumSa)
      }
    }
    */

  // for (var p in sumEa) {
  //   console.log('Player ' + p + ' Performance: ' + (sumSa[p] - sumEa[p]) + ' Expected: ' + sumEa[p] + ' Actual: ' + sumSa[p])
  //   players[p].elo += Math.round(32 * (sumSa[p] - sumEa[p]))
  // }

  // ********************************

  // var endRank = _.map(players, 'elo')
  // var gp = [gamesPlayed.BJ, gamesPlayed.BK, gamesPlayed.JT, gamesPlayed.MP, gamesPlayed.TS]

  // var diff = endRank.map(function (num, idx) {
  //   return Math.round(((gp[idx] > 0) ? (num - startRank[idx]) / gp[idx] : 0) * 100) / 100
  // })

  //  var diff = Object.assign({}, playersZero)
  //  Object.keys(players).forEach(function (k) {playersZero[k] = 0 })

  //  var diff = _.map(players, function ())

  // console.log(diff)
  // console.log(endRank)
};

// Overall win %
// _.map(players,
//   function (p) {
//     p.win_percent = Math.round((p.wins + p.draws * 0.5) / (p.wins + p.draws + p.losses) * 10000) / 100
//   })

console.log(players)
