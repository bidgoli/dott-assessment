import { Coordinate, Matrix } from './type';
import { getMatrixSize, isInMatrix } from './matrix';

/**
 * Return the list of coordinates that are at distance r from a given point x
 *
 * @param x the coordinates of a given point
 * @param r the desired distance
 * @returns the list of points at the distance of r from x
 */
export function getDistanceR(x: Coordinate, r: number): Coordinate[] {
    // Check if the input is valid
    if (!Number.isInteger(r) || r < 0) throw new Error(`Invalid input for r: Given ${r}`);

    // Return the same point if radius is zero
    if (r === 0) return [x];

    // Initializing the list
    const list: Coordinate[] = [];

    // Four different directions to generate a rhombus around
    const directions = [
        [-1, 1],
        [-1, -1],
        [1, -1],
        [1, 1],
    ];

    // Starting from the right corner of the rhombus
    const prev: Coordinate = [x[0] + r, x[1]];

    // Looping through the rhombus points using 4 directions
    for (const d of directions) {
        for (let i = 0; i < r; i++) {
            // Add the previous point to the list. Using spread notation to avoid using reference
            list.push([...prev]);
            // Update the previous point by taking a step in the given direction
            prev[0] = prev[0] + d[0];
            prev[1] = prev[1] + d[1];
        }
    }

    // Returning the result
    return list;
}

/**
 * Calculates the minimum distance of a given point to a value of 1 in the matrix
 *
 * @param matrix the input matrix
 * @param x the coordinates of given point
 * @returns the minimum distance of the given point to a value of 1 in the matrix
 */
export function findMinDistance(matrix: Matrix, x: Coordinate): number {
    // Calculating the size of the matrix
    const [n, m] = getMatrixSize(matrix);

    // Increasing the radius till hitting the first nonzero value
    for (let r = 0; r < m + n - 1; r++) {
        // Getting the points at the distance of r
        const distanceR = getDistanceR(x, r);
        for (const y of distanceR) {
            // Check if the point is valid and is nonzero
            if (isInMatrix(y, n, m) && matrix[y[0]][y[1]] === 1) {
                return r;
            }
        }
    }
    throw new Error('No value of 1 is found in the matrix');
}

/**
 * Calculates the minimum distance of each entity of a given matrix to a value of 1
 *
 * @param matrix the input matrix
 * @returns the matrix containing the minimum distance of each entity to a value of 1
 */
export function getDistanceMatrix(matrix: Matrix): Matrix {
    // Initializing the result
    const result: Matrix = [];
    const [n, m] = getMatrixSize(matrix);

    // Calculating the minimum distance for each entity
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < m; j++) {
            row.push(findMinDistance(matrix, [i, j]));
        }
        result.push(row);
    }

    // Returning the result
    return result;
}
