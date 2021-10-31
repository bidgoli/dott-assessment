import { Coordinate, Matrix, Row } from './type';

/**
 * Checks if a row is zero or not
 *
 * @param row the row to be checked
 * @returns a boolean indicating if the row is zero
 */
function isNotZeroRow(row: Row): boolean {
    return row.find((e) => e !== 0) !== undefined;
}

/**
 * Checks if a matrix is zero or not
 *
 * @param matrix the matrix to be checked
 * @returns a boolean indicating if the matrix is zero
 */
export function isNotZeroMatrix(matrix: Matrix): boolean {
    return matrix.find((r) => isNotZeroRow(r)) !== undefined;
}

/**
 * Calculate the size of a matrix
 *
 * @param matrix The matrix to calculate its size.
 * @returns The size of the matrix: [rows, cols] or [n,m]
 */
export function getMatrixSize(matrix: Matrix): [number, number] {
    const n = matrix.length;
    // Check if the matrix is empty
    if (n === 0) {
        return [0, 0];
    }

    const m = matrix[0].length;

    // Check if the number of colmuns is the same in each row
    for (const row of matrix) {
        if (row.length !== m) {
            throw new Error('The column size is not consistent');
        }
    }

    // Returning the result
    return [n, m];
}

/**
 * Check if x is located in a [n,m] matrix or not
 *
 * @param x  given coordinates
 * @param n  number of rows
 * @param m  number of columns
 * @returns a boolean indicating if x is located in an [n,m] matrix or not
 */
export function isInMatrix(x: Coordinate, n: number, m: number): boolean {
    const [i, j] = x;
    return i >= 0 && j >= 0 && i <= n - 1 && j <= m - 1;
}
