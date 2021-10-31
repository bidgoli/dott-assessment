import 'mocha';
import { expect } from 'chai';

import { run } from '../src/run';

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

const expected = `3 2 1 0
2 1 0 0
1 0 0 1

3 2 1 0
4 3 2 1
5 4 3 2

0`;

describe('05-run', (): void => {
    describe('run should', (): void => {
        it('return the result in the standard format', (): void => {
            expect(run(sampleInput)).to.deep.equal(expected);
        });
    });
});
