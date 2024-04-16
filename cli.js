#!/usr/bin/env node

const { program, InvalidArgumentError } = require('commander')
const { getCombinations, groupBySum } = require('./combinations')


function parsePositiveInt(value) {
  // parseInt takes a string and a radix
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    throw new InvalidArgumentError('Not a number.');
  }
  if (parsedValue <= 0) {
    throw new InvalidArgumentError('The number must be a positive integer.')
  }
  return parsedValue;
}


const isRange = (summand = '') =>
  summand.indexOf('-') > 0


const range = (start) => (end) =>
  start === end
    ? [start]
    : [start, ...range(start + 1)(end)];


const parseSummand = (summand, previousValue = []) => {
  if (isRange(summand)) {
    const [start, end] = summand.split('-').map(parsePositiveInt)
    return [
      ...previousValue,
      ...range(start)(end),
    ]
  } else {
    return [
      ...previousValue,
      parsePositiveInt(summand)
    ]
  }
}


const defaultSummands =
  Object.freeze(range(1)(9));


const difference = (a, b = []) =>
  a.filter(x => !b.includes(x));


program
  .argument('<sum>', 'The number to sum to. It must be a positive integer.', parsePositiveInt)
  .requiredOption('-u, --using <amount>', 'The amount of summands to use. It must be a positive integer.', parsePositiveInt)
  .option('-f, --from <summand...>', 'The list of valid summands. The default value is 1-9.', parseSummand)
  .option('-e, --excluding <not-summands...>', 'Numbers that should not be used as summands,', parseSummand)
  .action((
    sum,
    { using: amountOfSummands,
      from = defaultSummands,
      excluding = [],
    }
  ) => {
    const summands = difference(from, excluding).sort()
    const combinations = getCombinations(summands, amountOfSummands)
    const sums = groupBySum(combinations)
    console.log(`Combinations of ${amountOfSummands} numbers from ${summands} that sum to ${sum}:`)
    console.log(sums[sum])
  })


program.parse(process.argv)
