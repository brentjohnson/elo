
var game = [
  [
  // 2022-09-06 SET:DMU Pre-Release 40 card
    ['Chad', 'Joe', 'W'],
    ['Chad', 'Omar', 'W'],
    ['Chad', 'Ryan', 'W'],
    ['Chad', 'Tony', 'W'],
    ['Joe', 'Travis', 'L'],
    ['Joe', 'Omar', 'L'],
    ['Omar', 'Bobby', 'L'],
    ['Ryan', 'Tony', 'W'],
    ['Ryan', 'Travis', 'L'],
    ['Tony', 'Bobby', 'W'],
    ['Travis', 'Bobby', 'W']
  ],
  // 2022-09-13 SET:DMU 40 card
  [
    ['Chad', 'Bobby', 'W'], 
    ['Chad', 'Tony', 'W'], 
    ['Chad', 'Travis', 'W'], 
    ['Omar', 'Tony', 'L'], 
    ['Omar', 'Travis', 'L'], 
    ['Omar', 'Bobby', 'W'], 
    ['Ryan', 'Tony', 'W'], 
    ['Ryan', 'Travis', 'L'], 
    ['Ryan', 'Bobby', 'W']
  ],
  // 2022-09-20 SET:DMU 3HG NO scores
  // 2022-09-27 SET:DMU 40 card new pre-release kit
  [
    ['Bobby', 'Travis', 'D'],
    ['Bobby', 'Chad', 'L'],
    ['Bobby', 'Ryan', 'W'],
    ['Chad', 'Omar', 'W'],
    ['Chad', 'Joe', 'W'],
    ['Joe', 'Ryan', 'W'],
    ['Joe', 'Omar', 'W'],
    ['Omar', 'Tony', 'L'],
    ['Ryan', 'Tony', 'W'],
    ['Ryan', 'Travis', 'L'],
    ['Tony', 'Travis', 'L']
  ],
  // 2022-10-03 SET:DMU 60 card DMU only
  [
    ['Bobby', 'Chad', 'L'],
    ['Bobby', 'Travis', 'L'],
    ['Bobby', 'Joe', 'W'],
    ['Chad', 'Ryan', 'W'],
    ['Chad', 'Travis', 'W'],
    ['Joe', 'Ryan', 'L'],
    ['Joe', 'Tony', 'L'],
    ['Ryan', 'Tony', 'W'],
    ['Tony', 'Travis', 'L']
  ],
  // 2022-10-10 SET:DMU Chad hosted
  [
    ['Chad', 'Ryan', 'W'],
    ['Chad', 'Bobby', 'W'],
    ['Chad', 'Travis', 'W'],
    ['Omar', 'Travis', 'L'],
    ['Omar', 'Ryan', 'L'],
    ['Omar', 'Joe', 'L'],
    ['Bobby', 'Joe', 'W'],
    ['Bobby', 'Ryan', 'L'],
    ['Joe', 'Travis', 'W']
  ],
  // 2022-10-17 SET:DMU 60 card ALL cards
  [
    ['Chad', 'Tony', 'W'],
    ['Chad', 'Ryan', 'W'],
    ['Chad', 'Travis', 'L'],
    ['Omar', 'Tony', 'W'],
    ['Omar', 'Travis', 'L'],
    ['Omar', 'Ryan', 'W'],
    ['Ryan', 'Bobby', 'W'],
    ['Tony', 'Bobby', 'L'],
    ['Travis', 'Bobby', 'W']
  ],
  // 2022-10-24 SET:DMU
  [
    ['Travis', 'Bobby', 'W'],
    ['Travis', 'Ryan', 'W'],
    ['Travis', 'Omar', 'L'],
    ['Omar', 'Bobby', 'W'],
    ['Omar', 'Joe', 'W'],
    ['Joe', 'Ryan', 'L'],
    ['Joe', 'Bobby', 'W'],
    ['Ryan', 'Bobby', 'W']
  ],
  // 2022-11-03 SET:DMU all card 60 chad hosted
  [
    ['Chad', 'Travis', 'W'],
    ['Chad', 'Bobby', 'W'],
    ['Chad', 'Omar', 'W'],
    ['Travis', 'Omar', 'L'],
    ['Travis', 'Bobby', 'W'],
    ['Omar', 'Bobby', 'L']
  ],
  // 2022-11-07 SET:DMU all card 60 tony hosted
  [
    ['Chad', 'Tony', 'W'],
    ['Chad', 'Bobby', 'W'],
    ['Chad', 'Joe', 'W'],
    ['Joe', 'Bobby', 'W'],
    ['Joe', 'Omar', 'W'],
    ['Omar', 'Tony', 'D'],
    ['Omar', 'Bobby', 'W'],
    ['Tony', 'Bobby', 'L']
  ],
  // 2022-11-14 SET:BRO 40 card sealed opening week
  [
    ['Ally', 'Chad', 'W'],
    ['Ally', 'Omar', 'W'],
    ['Ally', 'Travis', 'W'],
    ['Chad', 'Bobby', 'W'],
    ['Chad', 'Tony', 'L'],
    ['Omar', 'Ryan', 'W'],
    ['Omar', 'Tony', 'L'],
    ['Ryan', 'Travis', 'L'],
    ['Ryan', 'Bobby', 'L'],
    ['Tony', 'Bobby', 'W'],
    ['Travis', 'Bobby', 'L']
  ],
  // 2022-11-21 SET:BRO 40 card
  [
    ['Ally', 'Omar', 'W'],
    ['Ally', 'Bobby', 'W'],
    ['Ally', 'Chad', 'L'],
    ['Chad', 'Ryan', 'W'],
    ['Chad', 'Travis', 'W'],
    ['Joe', 'Travis', 'D'],
    ['Joe', 'Tony', 'D'],
    ['Joe', 'Omar', 'D'],
    ['Omar', 'Ryan', 'L'],
    ['Ryan', 'Bobby', 'L'],
    ['Tony', 'Bobby', 'L'],
    ['Tony', 'Travis', 'L']
  ],
  // 2022-11-28 SET:BRO
  [
    ['Ally', 'Chad', 'L'],
    ['Ally', 'Tony', 'W'],
    ['Ally', 'Joe', 'W'],
    ['Chad', 'Joe', 'W'],
    ['Chad', 'Travis', 'L'],
    ['Omar', 'Joe', 'L'],
    ['Omar', 'Ryan', 'D'],
    ['Omar', 'Bobby', 'L'],
    ['Ryan', 'Travis', 'W'],
    ['Ryan', 'Tony', 'W'],
    ['Tony', 'Bobby', 'L'],
    ['Travis', 'Bobby', 'W']
  ],
  // 2022-12-05 SET:BRO 60 card
  [
    ['Ally', 'Chad', 'W'],
    ['Ally', 'Ryan', 'L'],
    ['Ally', 'Travis', 'L'],
    ['Chad', 'Joe', 'L'],
    ['Chad', 'Tony', 'W'],
    ['Joe', 'Travis', 'D'],
    ['Joe', 'Ryan', 'L'],
    ['Ryan', 'Tony', 'W'],
    ['Tony', 'Travis', 'L']
  ],
  // 2022-12-19
  [
    ['Ally', 'Ryan', 'W'],
    ['Ally', 'Omar', 'W'],
    ['Ally', 'Bobby', 'L'],
    ['Omar', 'Ryan', 'L'],
    ['Omar', 'Travis', 'L'],
    ['Travis', 'Bobby', 'D'],
    ['Travis', 'Ryan', 'W'],
    ['Bobby', 'Ryan', 'W']
  ],
  // 2023-1-23 SET:ANY mono-color
  [
    ['Joe', 'Bobby', 'L'],
    ['Joe', 'Ryan', 'W'],
    ['Joe', 'Travis', 'W'],
    ['Bobby', 'Caleb', 'L'],
    ['Bobby', 'Ally', 'W'],
    ['Ryan', 'Ally', 'L'],
    ['Ryan', 'Caleb', 'W'],
    ['Caleb', 'Travis', 'L'],
    ['Travis', 'Ally', 'W']
  ],
    // 2023-1-30 SET:ANY 60 card
  [
    ['Chad', 'Omar', 'W'],
    ['Chad', 'Bobby', 'W'],
    ['Chad', 'Travis', 'L'],
    ['Travis', 'Bobby', 'W'],
    ['Travis', 'Ally', 'W'],
    ['Travis', 'Caleb', 'W'],
    ['Ally', 'Ryan', 'W'],
    ['Ally', 'Omar', 'W'],
    ['Caleb', 'Omar', 'W'],
    ['Caleb', 'Ryan', 'L'],
    ['Caleb', 'Bobby', 'L'],
    ['Bobby', 'Ryan', 'L']
  ],
  [
    ['Ally', 'Omar', 'W'],
    ['Ally', 'Caleb', 'W'],
    ['Ally', 'Chad', 'W'],
    ['Bobby', 'Travis', 'L'],
    ['Bobby', 'Ryan', 'W'],
    ['Bobby', 'Tony', 'L'],
    ['Chad', 'Tony', 'W'],
    ['Chad', 'Travis', 'W'],
    ['Caleb', 'Ryan', 'W'],
    ['Caleb', 'Travis','L'],
    ['Omar', 'Tony', 'L'],
    ['Omar', 'Ryan', 'W']
  ],
  [
    ['Ally', 'Joe', 'W'],
    ['Ally', 'Tony', 'D'],
    ['Ally', 'Bobby', 'L'],
    ['Bobby', 'Chad', 'W'],
    ['Bobby', 'Travis', 'L'],
    ['Chad', 'Joe', 'L',],
    ['Chad', 'Ryan', 'L'],
    ['Joe', 'Tony', 'L'],
    ['Ryan', 'Travis', 'L'],
    ['Ryan', 'Tony', 'W'],
    ['Travis', 'Chad', 'W']
  ]
]
module.exports = game
