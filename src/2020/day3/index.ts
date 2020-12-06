import { readFile } from '../../utils/file.utils';

export interface Position {
  x: number;
  y: number;
}

export interface Movement {
  toRight: number;
  toBottom: number;
}

export function getNextAxisPosition(
  initialPosition: number,
  movement: number,
  mapSize: number
): number {
  const newPosition = initialPosition + movement;
  if (newPosition >= mapSize) {
    return newPosition - mapSize;
  }
  return newPosition;
}

export function getMapXSize(map: string[]): number {
  return map[0].length || 0;
}

export function getValue(map: string[], position: Position): string {
  return map[position.y][position.x];
}

export function getNextPositionValue(
  map: string[],
  initialPosition: Position,
  movement: Movement
): string {
  return getValue(map, getNextPosition(map, initialPosition, movement));
}

export function getNextPosition(
  map: string[],
  initialPosition: Position,
  movement: Movement
): Position {
  return {
    x: getNextAxisPosition(
      initialPosition.x,
      movement.toRight,
      getMapXSize(map)
    ),
    y: getNextAxisPosition(initialPosition.y, movement.toBottom, map.length),
  };
}

export function hasReachBottom(
  map: string[],
  initialPosition: Position,
  movement: Movement
): boolean {
  const newY = initialPosition.y + movement.toBottom;
  return newY >= map.length;
}

export function cloneMap(map: string[]): string[] {
  const newMap: string[] = [];
  map.forEach((line) => {
    let newLine = '';
    for (let i = 0; i < line.length; i++) {
      newLine += line[i];
    }
    newMap.push(newLine);
  });
  return newMap;
}

export function displayPosition(map: string[], position: Position): void {
  const clonedMap: string[] = cloneMap(map);
  const currentLine = clonedMap[position.y];
  const currentLineChars = currentLine.split('');
  currentLineChars[position.x] = 'O';
  clonedMap[position.y] = currentLineChars.join();

  clonedMap.forEach((l) => console.log(l));
}

export async function part1() {
  console.log('Start program day 3 - Part 1');

  const map: string[] = await readFile('./src/2020/day3/input.txt');
  let currentPosition = { x: 0, y: 0 };
  const movement: Movement = {
    toRight: 3,
    toBottom: 1,
  };
  let result = 0;

  while (!hasReachBottom(map, currentPosition, movement)) {
    console.log('Current position', currentPosition);
    // displayPosition(map, currentPosition);

    if (getNextPositionValue(map, currentPosition, movement) === '#') {
      result++;
    }
    currentPosition = getNextPosition(map, currentPosition, movement);
  }

  console.log('The result is: ', result);
}

export async function part2() {
  console.log('Start program day 3 - Part 2');

  const values: string[] = await readFile('./src/2020/day3/input.txt');
}
