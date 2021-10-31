import 'mocha';
import { expect } from 'chai';

import { findMinDistance, getDistanceMatrix, getDistanceR } from '../src/distance';

describe('03-distance', (): void => {
    describe('getDistanceR should', (): void => {
        it('throw an error if radius is negative', (): void => {
            expect(() => getDistanceR([0, 0], -1)).to.throw('Invalid input for r: Given -1');
        });
        it('throw an error if radius is not an integer', (): void => {
            expect(() => getDistanceR([0, 0], 0.5)).to.throw('Invalid input for r: Given 0.5');
        });
        it('return the distance 0 from a given point', (): void => {
            const list = getDistanceR([0, 0], 0);
            expect(list).to.deep.equal([[0, 0]]);
        });

        it('return the distance 1 from a given point', (): void => {
            const list = getDistanceR([0, 0], 1);
            const expected = [
                [1, 0],
                [0, 1],
                [-1, 0],
                [0, -1],
            ];

            expect(list).to.deep.equal(expected);
        });
    });

    describe('findMinDistance should', (): void => {
        it('throw an error if the matrix is zero', (): void => {
            const zeroMatrix = [
                [0, 0],
                [0, 0],
            ];
            expect(() => findMinDistance(zeroMatrix, [0, 0])).to.throw('No value of 1 is found in the matrix');
        });

        it('find the minimum distance of 1s from a given point', (): void => {
            const validMatrix = [
                [1, 0],
                [0, 0],
            ];
            expect(findMinDistance(validMatrix, [1, 1])).to.equal(2);
        });
    });

    describe('getDistanceMatrix should', (): void => {
        it('calculate the minimum distance of 1s from each point in a matrix', (): void => {
            const matrix = [
                [0, 0, 0, 1],
                [0, 0, 1, 1],
                [0, 1, 1, 0],
            ];
            const expected = [
                [3, 2, 1, 0],
                [2, 1, 0, 0],
                [1, 0, 0, 1],
            ];
            expect(getDistanceMatrix(matrix)).to.deep.equal(expected);
        });
    });
});
