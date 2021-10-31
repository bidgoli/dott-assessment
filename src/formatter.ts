import { Matrix } from './type';

/**
 * Return the formatted distance matrix
 *
 * @param matrix the given distance matrix
 * @returns the given matrix in the standard output format
 */
export function formatMatrix(matrix: Matrix): string {
    // Putting a space between chars in one row, and a line break at the end of each row
    return matrix.map((row) => row.join(' ')).join('\n');
}
