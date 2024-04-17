# sum-to
CLI app to list all the possible ways of summing to N. Helpful when solving killer sudokus

## Install
```
npm i -g @binary-tree-syrup/sum-to
```

## Usage
```
sum-to --help
```

```
Usage: sum-to <sum> [options]

CLI app to list all the possible ways of summing to N. Helpful when solving killer sudokus.

Arguments:
  sum                                The number to sum to. It must be a positive integer.

Options:
  -u, --using <amount>               The amount of summands to use. It must be a positive integer.
  -f, --from <summand...>            The list of valid summands. The default value is 1-9.
  -e, --excluding <not-summands...>  Numbers that should not be used as summands,
  -h, --help                         display help for command
```

## Examples
```
$ sum-to 6 --using 2
Combinations of 2 numbers from 1,2,3,4,5,6,7,8,9 that sum to 6:
[ [ 1, 5 ], [ 2, 4 ] ]
```
```
$ sum-to 8 --using 3 from 1-4
Combinations of 3 numbers from 1,2,3,4,5,6,7,8,9 that sum to 8:
[ [ 1, 2, 5 ], [ 1, 3, 4 ] ]
```
```
$ sum-to 9 --using 2 --excluding 5
Combinations of 2 numbers from 1,2,3,4,6,7,8,9 that sum to 9:
[ [ 1, 8 ], [ 2, 7 ], [ 3, 6 ] ]
```
```
$ sum-to 30 --using 5             
Combinations of 5 numbers from 1,2,3,4,5,6,7,8,9 that sum to 30:
[
  [ 1, 5, 7, 8, 9 ],
  [ 2, 4, 7, 8, 9 ],
  [ 2, 5, 6, 8, 9 ],
  [ 3, 4, 6, 8, 9 ],
  [ 3, 5, 6, 7, 9 ],
  [ 4, 5, 6, 7, 8 ]
]
```
```
$ sum-to 18 -u 4 -f 1-7 -e 3 6
Combinations of 4 numbers from 1,2,4,5,7 that sum to 18:
[ [ 2, 4, 5, 7 ] ]
```
