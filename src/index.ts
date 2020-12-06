import readline from 'readline';
import * as day1 from './2020/day1';
import * as day2 from './2020/day2';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Day ? ', async (dayNumber: string) => {
  if (dayNumber === '1') {
    rl.question('Part ? ', async (part: string) => {
      if (part === '1') {
        await day1.part1();
        rl.close();
      } else {
        await day1.part2();
        rl.close();
      }
    });
  }

  if (dayNumber === '2') {
    rl.question('Part ? ', async (part: string) => {
      if (part === '1') {
        await day2.part1();
        rl.close();
      } else {
        await day2.part2();
        rl.close();
      }
    });
  }
});

rl.on('close', () => {
  process.exit(0);
});
