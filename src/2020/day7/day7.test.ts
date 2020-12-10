import { parseRule } from './';

describe('Day 7', () => {
  it('should correctly parse a bag from string', () => {
    expect(
      parseRule(
        'light red bags contain 1 bright white bag, 2 muted yellow bags.'
      )
    ).toEqual({
      name: 'light red',
      content: ['bright white', 'muted yellow'],
    });

    expect(parseRule('drab lime bags contain 4 dim maroon bags.')).toEqual({
      name: 'drab lime',
      content: ['dim maroon'],
    });
  });
});
