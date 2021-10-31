import 'mocha';
import { expect } from 'chai';

import { parseCase, splitCases } from '../src/parser';

// Input for splitCases

const invalidNumCases = `1
1 1
1

1 2
01`;

const validTwoCases = `2
1 1
1

1 2
01`;

const validTwoCasesSplitted = [
    `1 1
1`,
    `1 2
01`,
];

// Input for parseCase

const invalidFirstLine = `2
10`;

const invalidNumRow = `2 1
10`;

const invalidNumCol = `2 1
0
11`;

const invalidChars = `2 2
01
12`;

const validExample = `3 4
0001
0011
0110`;

const parsedExample = [
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 0],
];

describe('01-parser', (): void => {
    describe('splitCases should', (): void => {
        it('throw an error if the number of cases is not correct', (): void => {
            expect(() => splitCases(invalidNumCases)).to.throw('The number of cases does not match the input');
        });

        it('return the splitted cases', (): void => {
            expect(splitCases(validTwoCases)).to.deep.equal(validTwoCasesSplitted);
        });
    });

    describe('parseCase should', (): void => {
        it('throw an error if the first line is not correct', (): void => {
            expect(() => parseCase(invalidFirstLine)).to.throw('First line does not match the expected pattern');
        });

        it('throw an error if the number of rows is not correct', (): void => {
            expect(() => parseCase(invalidNumRow)).to.throw('The number of rows does not match with the first line');
        });

        it('throw an error if number of columns is not correct', (): void => {
            expect(() => parseCase(invalidNumCol)).to.throw('Invalid input for the row 2');
        });

        it('throw an error if matrix is not 0/1', (): void => {
            expect(() => parseCase(invalidChars)).to.throw('Invalid input for the row 2');
        });

        it('parse a valid example', (): void => {
            expect(parseCase(validExample)).to.deep.equal(parsedExample);
        });
    });
});
