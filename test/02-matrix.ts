import 'mocha';
import { expect } from 'chai';

import { getMatrixSize, isInMatrix, isNotZeroMatrix } from '../src/matrix';

describe('01-helper', (): void => {
    describe('isNotZeroMatrix should', (): void => {
        const zeroMatrix = [
            [0, 0],
            [0, 0],
        ];
        const nonZeroMatrix = [
            [0, 0],
            [0, 1],
        ];

        it('return true if the matrix is not zero', (): void => {
            expect(isNotZeroMatrix(nonZeroMatrix)).to.be.eql(true);
        });
        it('return false if the matrix is zero', (): void => {
            expect(isNotZeroMatrix(zeroMatrix)).to.be.eql(false);
        });
    });

    describe('getMatrixSize should', (): void => {
        it('throw an error if input is not a valid matrix', (): void => {
            const invalidMatrix = [[0, 1], [2]];
            expect(() => getMatrixSize(invalidMatrix)).to.throw('The column size is not consistent');
        });

        it('size of a valid matrix', (): void => {
            const validMatrix = [[0], [1]];
            expect(getMatrixSize(validMatrix)).to.deep.equal([2, 1]);
        });
    });

    describe('isInMatrix should', (): void => {
        it('return the correct value', (): void => {
            const [n, m] = [2, 3];
            expect(isInMatrix([-1, 0], n, m)).to.equal(false);
            expect(isInMatrix([0, -1], n, m)).to.equal(false);
            expect(isInMatrix([0, 3], n, m)).to.equal(false);
            expect(isInMatrix([2, 0], n, m)).to.equal(false);
            expect(isInMatrix([1, 1], n, m)).to.equal(true);
        });
    });
});
