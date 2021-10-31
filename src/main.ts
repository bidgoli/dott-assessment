import { run } from './run';

const sampleInput = `3
3 4
0001
0011
0110

3 4
0001
0000
0000

1 1
1`;

const output = run(sampleInput);

// eslint-disable-next-line no-console
console.log(output);
