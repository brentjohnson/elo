var games = require('./scores')

var players = {}
var weekNumber = 0

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
  results = results.sort(
    function (a, b) {
      var winPctA = Math.round(a.sumSa / a.gamesPlayed * 10000) / 100
      var winPctB = Math.round(b.sumSa / b.gamesPlayed * 10000) / 100

      return winPctB - winPctA || b.diff - a.diff
    })

  console.log('Name\tWin%\tELO Change')
  results.forEach(item => console.log(`${item.name}\t${Math.round(item.sumSa / item.gamesPlayed * 10000) / 100}\t${item.diff}`))
  console.log()

  results = Object.values(players).sort(function (a, b) { return b.elo - a.elo })

  console.log('Name\tELO\tRecord\tWin%')
  results.forEach(item => console.log(`${item.name}\t${item.elo}\t${item.wins}-${item.losses}-${item.draws}\t${Math.round((item.wins + item.draws * 0.5) / (item.wins + item.draws + item.losses) * 10000) / 100}`))
  console.log()
};

// Overall win %
// _.map(players,
//   function (p) {
//     p.win_percent = Math.round((p.wins + p.draws * 0.5) / (p.wins + p.draws + p.losses) * 10000) / 100
//   })

