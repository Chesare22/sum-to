const reduce = (reducer, initialValue) => (array) =>
  array.reduce(reducer, initialValue);












const SECONDS_IN_A_MINUTE = 60;


const sumTwoScores = (score1, score2) => {
  const minutes = score1[0] + score2[0];
  const seconds = score1[1] + score2[1];

  if (seconds >= SECONDS_IN_A_MINUTE) {
    const extraMinutes = Math.floor(seconds / SECONDS_IN_A_MINUTE);

    return [
      minutes + extraMinutes,
      seconds % SECONDS_IN_A_MINUTE,
    ];
  }

  return [minutes, seconds];
}


const sumAllScores =
  reduce(sumTwoScores, [0, 0])


const scores = [
  [1, 19],
  [0, 39],
  [0, 58],
  [0, 38],
  [0, 44],
  [1, 22],
];


console.log(sumAllScores(scores));
