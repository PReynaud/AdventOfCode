import {
  getNextAxisPosition,
  getNextPositionValue,
  hasReachBottom,
  getNextPosition,
} from '.';

describe('Day 3', () => {
  it('should calculate next position', () => {
    expect(getNextAxisPosition(0, 1, 5)).toBe(1);
    expect(getNextAxisPosition(0, 2, 5)).toBe(2);
    expect(getNextAxisPosition(0, 4, 5)).toBe(4);
    expect(getNextAxisPosition(1, 2, 5)).toBe(3);

    expect(getNextAxisPosition(0, 5, 5)).toBe(0);
    expect(getNextAxisPosition(0, 6, 5)).toBe(1);
    expect(getNextAxisPosition(2, 3, 5)).toBe(0);
  });

  const testMap = [
    '..##.......',
    '#...#...#..',
    '.#....#..#.',
    '..#.#...#.#',
    '.#...##..#.',
    '..#.##.....',
    '.#.#.#....#',
    '.#........#',
    '#.##...#...',
    '#...##....#',
    '.#..#...#.#',
  ];

  it('should get next value', () => {
    expect(
      getNextPositionValue(
        testMap,
        {
          x: 0,
          y: 0,
        },
        {
          toRight: 1,
          toBottom: 1,
        }
      )
    ).toBe('.');
    expect(
      getNextPositionValue(
        testMap,
        {
          x: 0,
          y: 0,
        },
        {
          toRight: 2,
          toBottom: 0,
        }
      )
    ).toBe('#');
    expect(
      getNextPositionValue(
        testMap,
        {
          x: 0,
          y: 0,
        },
        {
          toRight: 3,
          toBottom: 0,
        }
      )
    ).toBe('#');
    expect(
      getNextPositionValue(
        testMap,
        {
          x: 0,
          y: 0,
        },
        {
          toRight: 4,
          toBottom: 0,
        }
      )
    ).toBe('.');
    expect(
      getNextPositionValue(
        testMap,
        {
          x: 0,
          y: 0,
        },
        {
          toRight: 14,
          toBottom: 0,
        }
      )
    ).toBe('#');
  });

  it('should return the next position', () => {
    expect(
      getNextPosition(testMap, { x: 0, y: 0 }, { toRight: 5, toBottom: 2 })
    ).toEqual({ x: 5, y: 2 });

    expect(
      getNextPosition(testMap, { x: 0, y: 0 }, { toRight: 16, toBottom: 2 })
    ).toEqual({ x: 5, y: 2 });

    expect(
      getNextPosition(testMap, { x: 0, y: 0 }, { toRight: 5, toBottom: 7 })
    ).toEqual({ x: 5, y: 7 });
  });

  it('should indicate if the bottom has been reached', () => {
    expect(
      hasReachBottom(testMap, { x: 0, y: 0 }, { toRight: 0, toBottom: 10 })
    ).toBeFalsy();
    expect(
      hasReachBottom(testMap, { x: 0, y: 0 }, { toRight: 0, toBottom: 11 })
    ).toBeTruthy();
    expect(
      hasReachBottom(testMap, { x: 0, y: 0 }, { toRight: 0, toBottom: 12 })
    ).toBeTruthy();
  });
});
