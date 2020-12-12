import { readFile } from '../../utils/file.utils';

function parseListOfNumbers(list: string[]): number[] {
  return list.map((item) => Number(item.trim()));
}

function checkCurrentValueWithPrevious(
  numberList: number[],
  index: number,
  numberOfValuesChecked: number
): boolean {
  const valueToCheck = numberList[index];

  const firstIndex = index - numberOfValuesChecked;
  const previousValues: number[] = numberList.slice(firstIndex, index);

  return previousValues.some((currentFirstValue: number) => {
    const remainingValues = previousValues.filter(
      (v) => v !== currentFirstValue
    );
    return remainingValues.some((currentSecondValue: number) => {
      return currentFirstValue + currentSecondValue === valueToCheck;
    });
  });
}

function findFailingValue(
  numberList: number[],
  numberOfValuesChecked: number
): number {
  let currentCheckedIndex: number = numberOfValuesChecked;
  while (
    checkCurrentValueWithPrevious(
      numberList,
      currentCheckedIndex,
      numberOfValuesChecked
    )
  ) {
    currentCheckedIndex++;
  }
  return currentCheckedIndex;
}

function findRangeNumber(
  numberList: number[],
  searchValue: number,
  firstIndex: number
): number[] {
  const searchValueIndex: number = numberList.find((v) => v === searchValue)!;
  let currentIndex = firstIndex;
  let accumulator = 0;
  while (accumulator <= searchValue && currentIndex <= searchValueIndex) {
    console.log('Test range', firstIndex, currentIndex);

    accumulator += numberList[currentIndex];
    currentIndex++;
  }

  console.log('Accumulator value', accumulator);

  if (accumulator === searchValue) {
    return [firstIndex, currentIndex];
  }
  return [];
}

// function testMultipleRanges(
//   numberList: number[],
//   searchValue: number
// ): number[] {
//   let result: number[] = [];
//   let currentFirstIndex = 0;
//   while (result.length === 0) {
//     console.log('Test first index', currentFirstIndex)

//     result = findRangeNumber(numberList, searchValue, currentFirstIndex);
//     currentFirstIndex++;
//   }

//   return result;
// }

export async function part1() {
  console.log('Start program day 9 - Part 1');

  const list: string[] = await readFile('./src/2020/day9/input.txt');
  const allNumbers: number[] = parseListOfNumbers(list);
  const result = findFailingValue(allNumbers, 25);

  console.log('The result is: ', allNumbers[result]);
}

export async function part2() {
  console.log('Start program day 9 - Part 2');

  const list: string[] = await readFile('./src/2020/day9/input.txt');
  const allNumbers: number[] = parseListOfNumbers(list);
  findRangeNumber(allNumbers, 127, 0);
  findRangeNumber(allNumbers, 127, 1);
  findRangeNumber(allNumbers, 127, 2);
  findRangeNumber(allNumbers, 127, 3);

  console.log('The result is: ');
}
