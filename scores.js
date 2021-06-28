
var game = [
  [
    ['Jerod', 'Travis', 'W'],
    ['Chad', 'Brian', 'W'],
    ['Mike', 'Tony', 'W'],
    ['Brent', 'Joe', 'W'],
    ['Brian', 'Joe', 'W'],
    ['Chad', 'Brent', 'W'],
    ['Travis', 'Tony', 'W'],
    ['Mike', 'Jerod', 'W'],
    ['Brian', 'Travis', 'W'],
    ['Joe', 'Tony', 'W'],
    ['Brent', 'Jerod', 'W'],
    ['Mike', 'Chad', 'W']
  ],
  [
    ['Brent', 'Jerod', 'W'],
    ['Mike', 'Travis', 'W'],
    ['Chad', 'Tony', 'W'],
    ['Austen', 'Brian', 'W'],
    ['Chad', 'Jerod', 'W'],
    ['Travis', 'Brian', 'W'],
    ['Mike', 'Austen', 'W'],
    ['Brent', 'Tony', 'W'],
    ['Brent', 'Mike', 'W'],
    ['Brian', 'Jerod', 'W'],
    ['Chad', 'Travis', 'D'],
    ['Tony', 'Austen', 'L']
  ],
  [
    ['Joe', 'Brian', 'L'],
    ['Austen', 'Brent', 'L'],
    ['Mike', 'Tony', 'W'],
    ['Travis', 'Chad', 'L'],
    ['Eric', 'Jerod', 'L'],

    ['Brent', 'Chad', 'D'],
    ['Joe', 'Tony', 'W'],
    ['Mike', 'Brian', 'W'],
    ['Austen', 'Eric', 'W'],
    ['Travis', 'Jerod', 'W'],

    ['Brent', 'Mike', 'W'],
    ['Chad', 'Brian', 'W'],
    ['Austen', 'Travis', 'W'],
    ['Jerod', 'Joe', 'L'],
    ['Tony', 'Eric', 'L']
  ],
  [
    ['Brent', 'Brian', 'D'],
    ['Tony', 'Chad', 'W'],
    ['Mike', 'Jerod', 'W'],
    ['Austen', 'Joe', 'W'],

    ['Joe', 'Brent', 'W'],
    ['Travis', 'Mike', 'W'],
    ['Tony', 'Austen', 'L'],
    ['Brian', 'Jerod', 'D'],

    ['Travis', 'Austen', 'L'],
    ['Tony', 'Joe', 'L'],
    ['Brian', 'Mike', 'W'],
    ['Chad', 'Jerod', 'W']
  ],
  [
    ['Brent', 'Jerod', 'W'],
    ['Austen', 'Tony', 'W'],
    ['Travis', 'Chad', 'L'],

    ['Brent', 'Chad', 'W'],
    ['Brian', 'Austen', 'W'],
    ['Travis', 'Tony', 'D'],

    ['Brent', 'Brian', 'W'],
    ['Austen', 'Chad', 'L'],
    ['Travis', 'Jerod', 'W']

  ],
  [
    ['Mike', 'Jerod', 'W'],
    ['Brent', 'Tony', 'D'],
    ['Austen', 'Chad', 'L'],
    ['Travis', 'Brian', 'W'],

    ['Brent', 'Jerod', 'L'],
    ['Mike', 'Tony', 'W'],
    ['Austen', 'Brian', 'L'],
    ['Travis', 'Chad', 'W'],

    ['Brent', 'Austen', 'D'],
    ['Chad', 'Tony', 'W'],
    ['Jerod', 'Brian', 'L'],
    ['Travis', 'Mike', 'W']
  ],
  [
    ['Austen', 'Eric', 'W'],
    ['Chad', 'Jerod', 'W'],
    ['Mike', 'Joe', 'W'],
    ['Marcus', 'Tony', 'D'],
    ['Brian', 'Travis', 'W'],

    ['Chad', 'Austen', 'D'],
    ['Brian', 'Mike', 'W'],
    ['Tony', 'Jerod', 'W'],
    ['Marcus', 'Eric', 'W'],
    ['Joe', 'Travis', 'W'],

    ['Marcus', 'Austen', 'L'],
    ['Brian', 'Tony', 'W'],
    ['Mike', 'Jerod', 'W'],
    ['Travis', 'Eric', 'D'],
    ['Joe', 'Chad', 'L']
  ],
  [
    ['Brian', 'Mike', 'L'],
    ['Brent', 'Joe', 'W'],
    ['Chad', 'Tony', 'W'],
    ['Chad', 'Brian', 'W'],
    ['Brent', 'Mike', 'W'],
    ['Travis', 'Joe', 'W'],
    ['Chad', 'Brent', 'W'],
    ['Brian', 'Tony', 'L'],
    ['Travis', 'Mike', 'W'],
    ['Travis', 'Chad', 'L']
  ],
  [
    ['Chad', 'Brent', 'W'],
    ['Mike', 'Joe', 'W'],
    ['Tony', 'Jerod', 'W'],
    ['Austen', 'Travis', 'D'],
    ['Austen', 'Brent', 'W'],
    ['Travis', 'Mike', 'W'],
    ['Tony', 'Chad', 'L'],
    ['Jerod', 'Joe', 'L'],
    ['Joe', 'Brent', 'W'],
    ['Chad', 'Travis', 'W'],
    ['Jerod', 'Mike', 'L'],
    ['Tony', 'Austen', 'L']
  ],
  [
    ['Brent', 'Brian', 'W'],
    ['Joe', 'Travis', 'W'],
    ['Tony', 'Brent', 'W'],
    ['Tony', 'Travis', 'D'],
    ['Joe', 'Brian', 'W'],
    ['Joe', 'Brent', 'W'],
    ['Travis', 'Brian', 'W'],
    ['Tony', 'Joe', 'L']
  ],
  [
    ['Travis', 'Mike', 'W'],
    ['Brent', 'Joe', 'D'],
    ['Brian', 'Chad', 'L'],
    ['Tony', 'Jerod', 'D'],
    ['Austen', 'Travis', 'W'],
    ['Chad', 'Mike', 'W'],
    ['Tony', 'Brian', 'L'],
    ['Tony', 'Mike', 'L'],
    ['Jerod', 'Joe', 'D'],
    ['Brian', 'Joe', 'W'],
    ['Brent', 'Austen', 'W'],
    ['Brent', 'Jerod', 'W'],
    ['Chad', 'Travis', 'D'],
    ['Austen', 'Mike', 'W']
  ],
  [
    ['Brent', 'Jerod', 'W'],
    ['Chad', 'Travis', 'W'],
    ['Mike', 'Tony', 'W'],
    ['Brian', 'Joe', 'W'],

    ['Brent', 'Chad', 'W'],
    ['Travis', 'Jerod', 'D'],
    ['Brian', 'Mike', 'W'],
    ['Joe', 'Tony', 'L'],

    ['Brent', 'Brian', 'L'],
    ['Mike', 'Joe', 'L'],
    ['Chad', 'Jerod', 'W'],
    ['Tony', 'Travis', 'L']
  ],
  [
    ['Brent', 'Joe', 'W'],
    ['Mike', 'Travis', 'W'],
    ['Chad', 'Austen', 'W'],
    ['Brian', 'Tony', 'W'],
    ['Travis', 'Joe', 'W'],
    ['Brent', 'Chad', 'W'],
    ['Austen', 'Jerod', 'W'],
    ['Mike', 'Brian', 'W'],
    ['Tony', 'Travis', 'D'],
    ['Chad', 'Joe', 'W'],
    ['Brent', 'Mike', 'W'],
    ['Jerod', 'Brian', 'W'],
    ['Joe', 'Austen', 'L'],
    ['Chad', 'Tony', 'W'],
    ['Travis', 'Jerod', 'W']
  ],
  [
    ['Brent', 'Tony', 'D'],
    ['Chad', 'Brian', 'W'],
    ['Travis', 'Austen', 'L'],
    ['Joe', 'Mike', 'L'],
    ['Brent', 'Brian', 'W'],
    ['Chad', 'Tony', 'W'],
    ['Mike', 'Austen', 'W'],
    ['Travis', 'Joe', 'W'],
    ['Brent', 'Travis', 'W'],
    ['Chad', 'Mike', 'W'],
    ['Tony', 'Austen', 'L'],
    ['Brian', 'Joe', 'L']
  ],
  [
    ['Chad', 'Mike', 'W'],
    ['Travis', 'Tony', 'W'],
    ['Brent', 'Brian', 'W'],
    ['Brent', 'Marcus', 'D'],
    ['Tony', 'Brian', 'L'],
    ['Travis', 'Chad', 'W'],
    ['Chad', 'Marcus', 'W'],
    ['Mike', 'Travis', 'W'],
    ['Brent', 'Tony', 'W'],
    ['Brent', 'Travis', 'L'],
    ['Marcus', 'Tony', 'L'],
    ['Mike', 'Brian', 'W']
  ],
  [
    ['Brent', 'Mike', 'W'],
    ['Chad', 'Brian', 'L'],
    ['Tony', 'Travis', 'L'],
    ['Brent', 'Joe', 'W'],
    ['Brian', 'Mike', 'W'],
    ['Chad', 'Travis', 'W'],
    ['Tony', 'Chad', ''],
    ['Brian', 'Travis', 'L'],
    ['Mike', 'Joe', 'W'],
    ['Tony', 'Joe', 'L'],
    ['Brent', 'Chad', 'L']
  ],
  [
    ['Brent', 'Tony', 'W'],
    ['Chad', 'Marcus', 'W'],
    ['Travis', 'Mike', 'W'],
    ['Joe', 'Brian', 'W'],
    ['Chad', 'Brent', 'W'],
    ['Brian', 'Mike', 'W'],
    ['Tony', 'Marcus', 'L'],
    ['Joe', 'Travis', 'D'],
    ['Joe', 'Chad', 'W'],
    ['Mike', 'Tony', 'W'],
    ['Brent', 'Brian', 'W'],
    ['Marcus', 'Travis', 'L']
  ],
  // 2021-05-10
  [
    ['Brent', 'Tony', 'W'],
    ['Brian', 'Travis', 'W'],
    ['Mike', 'Omar', 'W'],
    ['Chad', 'Joe', 'W'],
    ['Caleb', 'Chad', 'W'],
    ['Joe', 'Brian', 'W'],
    ['Mike', 'Travis', 'W'],
    ['Brent', 'Omar', 'W'],
    ['Caleb', 'Tony', 'W'],
    ['Chad', 'Brian', 'W'],
    ['Mike', 'Joe', 'W'],
    ['Caleb', 'Travis', 'W'],
    ['Tony', 'Omar', 'W'],
    ['Brent', 'Chad', 'W'],
    ['Brian', 'Mike', 'W'],
    ['Caleb', 'Joe', 'W']
  ],
  // 2021-05-17
  [
    ['Brent', 'Brian', 'W'],
    ['Travis', 'Omar', 'W'],
    ['Chad', 'Caleb', 'W'],
    ['Caleb', 'Brent', 'W'],
    ['Chad', 'Tony', 'W'],
    ['Travis', 'Brian', 'D'],
    ['Caleb', 'Omar', 'W'],
    ['Caleb', 'Travis', 'W'],
    ['Brent', 'Tony', 'W'],
    ['Chad', 'Omar', 'W']
  ],
  // 2021-05-24
  [
    ['Brian', 'Chad', 'W'],
    ['Brian', 'Caleb', 'W'],
    ['Brian', 'Travis', 'W'],
    ['Chad', 'Travis', 'W'],
    ['Chad', 'Mike', 'W'],
    ['Chad', 'Omar', 'W'],
    ['Mike', 'Omar', 'W'],
    ['Travis', 'Omar', 'W'],
    ['Caleb', 'Mike', 'W']
  ],
  //2021-05-31
  [
    ['Chad', 'Tony', 'W'],
    ['Caleb', 'Travis', 'W'],
    ['Travis', 'Tony', 'W'],
    ['Caleb', 'Chad', 'W'],
    ['Caleb', 'Tony', 'W'],
    ['Chad', 'Travis', 'W']
  ],
  // 2021-06-07
  [
    ['Chad', 'Mike', 'W'],
    ['Travis', 'Brent', 'W'],
    ['Caleb', 'Joe', 'W'],
    ['Brent', 'Joe', 'W'],
    ['Chad', 'Travis', 'W'],
    ['Caleb', 'Mike', 'W'],
    ['Mike', 'Brent', 'W'],
    ['Caleb', 'Chad', 'W'],
    ['Travis', 'Joe', 'W']
  ],
  // 2021-06-14
  [
    ['Brian', 'Travis', 'W'],
    ['Caleb', 'Omar', 'W'],
    ['Brian', 'Tony', 'D'],
    ['Travis', 'Caleb', 'W'],
    ['Travis', 'Omar', 'W'],
    ['Caleb', 'Brian', 'W'],
    ['Caleb', 'Tony', 'W'],
    ['Brian', 'Omar', 'D'],
    ['Travis', 'Tony', 'D']

  ],
  // 2021-06-21
  [
    ['Chad', 'Joe', 'W'],
    ['Chad', 'Travis', 'W'],
    ['Chad', 'Caleb', 'W'],
    ['Chad', 'Brian', 'W'],
    ['Caleb', 'Mike', 'W'],
    ['Caleb', 'Joe', 'W'],
    ['Travis', 'Omar', 'D'],
    ['Travis', 'Brian', 'W'],
    ['Mike', 'Omar', 'W'],
    ['Mike', 'Joe', 'W'],
    ['Brian', 'Omar', 'W']

  ]
]

module.exports = game
