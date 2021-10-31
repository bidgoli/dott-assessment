import 'mocha';
import { expect } from 'chai';

import { formatMatrix } from '../src/formatter';

const distanceMatrix = [
    [3, 2, 1, 0],
    [2, 1, 0, 0],
    [1, 0, 0, 1],
];
const expected = `3 2 1 0
2 1 0 0
1 0 0 1`;

describe('04-formatter', (): void => {
    describe('formatMatrix should', (): void => {
        it('format a matrix in the standard output', (): void => {
            expect(formatMatrix(distanceMatrix)).to.deep.equal(expected);
        });
    });
});
