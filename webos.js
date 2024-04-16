const getCombinations = (numbers = [], length = 0) => {
  if (length === 0 || numbers.length < length) {
    return []
  }

  if (length === 1) {
    return numbers.map(number => [number])
  }

  const [first, ...rest] = numbers

  const combinationsUsingTheFirstNumber =
    getCombinations(rest, length - 1)
    .map((val) => [first, ...val])

  const combinationsWithoutFirst =
    getCombinations(rest, length)

  return [...combinationsUsingTheFirstNumber, ...combinationsWithoutFirst]
}


const sumArray = array => array.reduce((a, b) => a + b, 0)


const _groupBySum = (accBySum, array) => {
  const sum = sumArray(array)
  const accumulatedWithMatchingSum = accBySum[sum]

  if (accumulatedWithMatchingSum) {
    return {
      ...accBySum,
      [sum]: [...accumulatedWithMatchingSum, array]
    }
  }
  return {
    ...accBySum,
    [sum]: [array]
  }
}

const groupBySum = (array = []) => array.reduce(_groupBySum, {})


console.log(
  groupBySum(
    getCombinations(
      [1,2, 3, 4, 5, 6, 7, 8, 9],
      3
    )
  )[13]
)

// console.log(getCombinations([2, 3, 4, 5], 3))
