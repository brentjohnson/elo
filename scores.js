
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
  ],
  // 2021-06-28
  [
    ['Chad', 'Brent', 'W'],
    ['Brian', 'Travis', 'W'],
    ['Omar', 'Caleb', 'W'],
    ['Chad', 'Travis', 'W'],
    ['Caleb', 'Brent', 'W'],
    ['Omar', 'Brian', 'W'],
    ['Travis', 'Brent', 'W'],
    ['Caleb', 'Brian', 'W'],
    ['Omar', 'Chad', 'L']
  ],
  // 2021-07-07
  [
    ['Tony', 'Caleb', 'L'],
    ['Travis', 'Omar', 'D'],
    ['Chad', 'Brian', 'W'],
    ['Joe', 'Caleb', 'L'],
    ['Chad', 'Tony', 'W'],
    ['Brian', 'Omar', 'W'],
    ['Tony', 'Brian', 'L'],
    ['Caleb', 'Chad', 'W'],
    ['Joe', 'Omar', 'D'],
    ['Chad', 'Travis', 'L'],
    ['Joe', 'Travis', 'L']
  ],
  // 2021-07-12
  [
    ['Tony', 'Caleb', 'L'],
    ['Brian', 'Travis', 'D'],
    ['Chad', 'Omar', 'L'],
    ['Chad', 'Travis', 'W'],
    ['Brian', 'Tony', 'W'],
    ['Omar', 'Caleb', 'L'],
    ['Tony', 'Chad', 'L'],
    ['Omar', 'Travis', 'D'],
    ['Caleb', 'Brian', 'W']
  ],
  // 2021-07-26
  [
    ['Brian', 'Travis', 'W'],
    ['Chad', 'Tony', 'W'],
    ['Caleb', 'Omar', 'W'],
    ['Chad', 'Caleb', 'W'],
    ['Brian', 'Omar', 'D'],
    ['Travis', 'Tony', 'D'],
    ['Tony', 'Omar', 'W'],
    ['Travis', 'Caleb', 'L'],
    ['Chad', 'Brian', 'L']
  ],
  // 2021-08-02
  [
    ['Chad', 'Tony', 'W'],
    ['Travis', 'Omar', 'W'],
    ['Chad', 'Joe', 'L'],
    ['Tony', 'Travis', 'D'],
    ['Chad', 'Travis', 'W'],
    ['Joe', 'Omar', 'W'],
    ['Tony', 'Joe', 'L'],
    ['Tony', 'Omar', 'D']
  ],
  // 2021-08-09
  [
    ['Chad', 'Caleb', 'W'],
    ['Brian', 'Travis', 'W'],
    ['Caleb', 'Brian', 'W'],
    ['Chad', 'Joe', 'L'],
    ['Joe', 'Caleb', 'W'],
    ['Travis', 'Joe', 'W'],
    ['Chad', 'Travis', 'W'],
    ['Brian', 'Chad', 'W']
  ],
  // 2021-08-16
  [
    ['Omar', 'Caleb', 'W'],
    ['Omar', 'Tony', 'D'],
    ['Caleb', 'Tony', 'W']
  ],
  // 2021-08-24
  [
    ['Tony', 'Travis', 'D'],
    ['Tony', 'Caleb', 'L'],
    ['Tony', 'Brian', 'D'],
    ['Travis', 'Joe', 'L'],
    ['Travis', 'Brian', 'L'],
    ['Joe', 'Chad', 'L'],
    ['Joe', 'Caleb', 'L'],
    ['Brian', 'Chad', 'L'],
    ['Caleb', 'Chad', 'L']
  ],
  // 2021-08-23
  [
    ['Omar', 'Tony', 'D'],
    ['Chad', 'Travis', 'W'],
    ['Tony', 'Brian', 'L'],
    ['Chad', 'Brian', 'W'],
    ['Brian', 'Travis', 'W'],
    ['Tony', 'Travis', 'L'],
    ['Omar', 'Brian', 'L'],
    ['Omar', 'Chad', 'L']
  ],
  // 2021-09-06
  [
    ['Travis', 'Chad', 'L'],
    ['Travis', 'Brian', 'W'],
    ['Travis', 'Caleb', 'L'],
    ['Chad', 'Brian', 'W'],
    ['Chad', 'Caleb', 'W'],
    ['Caleb', 'Brian', 'W']
  ],
  // 2021-09-13
  [
    ['Tony', 'Omar', 'W'],
    ['Joe', 'Tony', 'W'],
    ['Chad', 'Caleb', 'W'],
    ['Omar', 'Caleb', 'L'],
    ['Chad', 'Joe', 'W'],
    ['Caleb', 'Tony', 'W'],
    ['Omar', 'Chad', 'L'],
    ['Caleb', 'Joe', 'L']
  ],
  // 2021-09-20
  [
    ['Tony', 'Caleb', 'L'],
    ['Tony', 'Brian', 'D'],
    ['Tony', 'Chad', 'W'],
    ['Caleb', 'Brian', 'W'],
    ['Caleb', 'Travis', 'W'],
    ['Travis', 'Chad', 'W'],
    ['Travis', 'Omar', 'W'],
    ['Brian', 'Omar', 'L'],
    ['Omar', 'Chad', 'L']
  ],
  // 2021-09-27
  [
    ['Tony', 'Omar', 'L'],
    ['Tony', 'Caleb', 'L'],
    ['Tony', 'Brian', 'L'],
    ['Travis', 'Caleb', 'L'],
    ['Travis', 'Omar', 'W'],
    ['Brian', 'Chad', 'L'],
    ['Brian', 'Omar', 'L'],
    ['Brent', 'Chad', 'W'],
    ['Brent', 'Caleb', 'L'],
    ['Travis', 'Chad', 'D']
  ],
  // 2021-10-04
  [
    ['Tony', 'Travis', 'L'],
    ['Tony', 'Omar', 'D'],
    ['Tony', 'Joe', 'D'],
    ['Brian', 'Joe', 'W'],
    ['Brian', 'Omar', 'W'],
    ['Chad', 'Brian', 'W'],
    ['Chad', 'Travis', 'L'],
    ['Omar', 'Chad', 'L'],
    ['Travis', 'Joe', 'D']
  ],
  // 2021-10-11
  [
    ['Tony', 'Joe', 'L'],
    ['Tony', 'Chad', 'L'],
    ['Tony', 'Omar', 'L'],
    ['Chad', 'Omar', 'L'],
    ['Chad', 'Travis', 'D'],
    ['Omar', 'Caleb', 'L'],
    ['Caleb', 'Travis', 'L'],
    ['Travis', 'Joe', 'W'],
    ['Joe', 'Caleb', 'L']
  ],
  // 2021-10-18
  [
    ['Travis', 'Joe', 'W'],
    ['Chad', 'Brian', 'W'],
    ['Travis', 'Brian', 'L'],
    ['Chad', 'Tony', 'L'],
    ['Joe', 'Brian', 'L'],
    ['Travis', 'Tony', 'W'],
    ['Chad', 'Joe', 'W'],
    ['Tony', 'Brian', 'W']
  ],
  // 2021-11-01
  [
    ['Travis', 'Omar', 'W'],
    ['Brian', 'Caleb', 'L'],
    ['Travis', 'Caleb', 'W'],
    ['Brian', 'Omar', 'W'],
    ['Travis', 'Brian', 'L'],
    ['Caleb', 'Omar', 'W']
  ],
  // 2021-11-08
  [
    ['Tony', 'Chad', 'D'],
    ['Tony', 'Joe', 'L'],
    ['Tony', 'Brian', 'W'],
    ['Chad', 'Brian', 'W'],
    ['Caleb', 'Brian', 'W'],
    ['Caleb', 'Travis', 'L'],
    ['Travis', 'Joe', 'W'],
    ['Caleb', 'Joe', 'W'],
    ['Chad', 'Travis', 'W']
  ],
  // 2021-11-15
  [
    ['Tony', 'Francisco', 'D'],
    ['Tony', 'Joe', 'L'],
    ['Tony', 'Omar', 'L'],
    ['Chad', 'Travis', 'W'],
    ['Chad', 'Omar', 'W'],
    ['Chad', 'Joe', 'W'],
    ['Travis', 'Joe', 'L'],
    ['Travis', 'Francisco', 'W'],
    ['Omar', 'Francisco', 'L']
  ],
  // 2021-11-22
  [
    ['Tony', 'Travis', 'L'],
    ['Tony', 'Francisco', 'D'],
    ['Tony', 'Joe', 'W'],
    ['Chad', 'Omar', 'W'],
    ['Chad', 'Joe', 'W'],
    ['Chad', 'Travis', 'W'],
    ['Joe', 'Francisco', 'W'],
    ['Travis', 'Omar', 'W'],
    ['Omar', 'Francisco', 'W']
  ],
  // 2021-11-29
  [
    ['Tony', 'Caleb', 'W'],
    ['Tony', 'Brian', 'D'],
    ['Tony', 'Travis', 'L'],
    ['Travis', 'Brian', 'W'],
    ['Travis', 'Joe', 'W'],
    ['Chad', 'Joe', 'L'],
    ['Chad', 'Caleb', 'W'],
    ['Chad', 'Brian', 'W'],
    ['Caleb', 'Joe', 'D']
  ],
  // 2021-12-07
  [
    ['Chad', 'Caleb', 'L'],
    ['Tony', 'Travis', 'L'],
    ['Joe', 'Omar', 'W'],
    ['Chad', 'Joe', 'W'],
    ['Caleb', 'Travis', 'L'],
    ['Tony', 'Omar', 'L'],
    ['Omar', 'Caleb', 'L'],
    ['Joe', 'Tony', 'W'],
    ['Chad', 'Travis', 'W']
  ],
  // 2021-12-13
  [
    ['Travis', 'Caleb', 'L'],
    ['Brian', 'Joe', 'L'],
    ['Chad', 'Francisco', 'L'],
    ['Caleb', 'Joe', 'L'],
    ['Omar', 'Francisco', 'W'],
    ['Chad', 'Travis', 'W'],
    ['Tony', 'Brian', 'W'],
    ['Brian', 'Travis', 'D'],
    ['Joe', 'Omar', 'L'],
    ['Caleb', 'Chad', 'W'],
    ['Tony', 'Omar', 'L'],
    ['Francisco', 'Tony', 'W']
  ],
  // 2022-02-07
  [
    ['Tony', 'Caleb', 'W'],
    ['Tony', 'Chad', 'L'],
    ['Travis', 'Chad', 'L'],
    ['Travis', 'Caleb', 'L'],
    ['Chad', 'Caleb', 'L'],
    ['Chad', 'Omar', 'W'],
    ['Travis', 'Omar', 'D'],
    ['Tony', 'Omar', 'D']
  ],
  // 2022-02-07
  [
    ['Tony', 'Chad', 'L'],
    ['Tony', 'Caleb', 'L'],
    ['Tony', 'Omar', 'W'],
    ['Chad', 'Caleb', 'W'],
    ['Chad', 'Travis', 'W'],
    ['Chad', 'Omar', 'W'],
    ['Travis', 'Omar', 'W'],
    ['Travis', 'Caleb', 'L']
  ],
  // 2022-02-15
  [
    ['Tony', 'Ryan', 'W'],
    ['Tony', 'Chad', 'L'],
    ['Chad', 'Omar', 'W'],
    ['Travis', 'Joe', 'D'],
    ['Omar', 'Travis', 'D'],
    ['Ryan', 'Joe', 'L'],
    ['Joe', 'Chad', 'L'],
    ['Travis', 'Tony', 'W'],
    ['Ryan', 'Omar', 'L']
  ],
  // 2022-02-28
  [
    ['Caleb', 'Travis', 'D'],
    ['Caleb', 'Ryan', 'W'],
    ['Caleb', 'Chad', 'L'],
    ['Chad', 'Travis', 'L'],
    ['Chad', 'Omar', 'L'],
    ['Omar', 'Ryan', 'W'],
    ['Omar', 'Travis', 'L'],
    ['Ryan', 'Travis', 'L']
  ],
  // 2022-02-28
  [
    ['Joe', 'Chad', 'L'],
    ['Joe', 'Tony', 'W'],
    ['Joe', 'Travis', 'L'],
    ['Travis', 'Caleb', 'L'],
    ['Travis', 'Ryan', 'W'],
    ['Travis', 'Ryan', 'W'],
    ['Omar', 'Chad', 'L'],
    ['Omar', 'Ryan', 'W'],
    ['Caleb', 'Tony', 'W'],
    ['Chad', 'Caleb', 'L']
  ],
  // 2022-03-07
  [
    ['Chad', 'Ryan', 'W'],
    ['Chad', 'Travis', 'W'],
    ['Chad', 'Tony', 'W'],
    ['Joe', 'Tony', 'D'],
    ['Joe', 'Travis', 'D'],
    ['Joe', 'Ryan', 'W'],
    ['Ryan', 'Tony', 'D'],
    ['Travis', 'Tony', 'W']
  ],
  // 2022-03-14
  [
    ['Caleb', 'Chad', 'L'],
    ['Caleb', 'Omar', 'W'],
    ['Caleb', 'Tony', 'D'],
    ['Chad', 'Joe', 'W'],
    ['Chad', 'Tony', 'W'],
    ['Joe', 'Tony', 'W'],
    ['Joe', 'Travis', 'L'],
    ['Omar', 'Travis', 'W'],
    ['Omar', 'Ryan', 'D'],
    ['Ryan', 'Tony', 'L'],
    ['Ryan', 'Travis', 'L']
  ]
]

module.exports = game
