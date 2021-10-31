import { Matrix } from './type';

/**
 * Split the standard input into cases
 *
 * @param input the standard input
 * @returns the list of cases
 */
export function splitCases(input: string): string[] {
    // Split cases based on empty lines
    const cases = input.split('\n\n');

    // Finding the number of cases from the first line
    const firstCaseSplit = cases[0].split('\n');
    const numCases = Number(firstCaseSplit[0]);

    // Check if the number of cases is correct
    if (numCases !== cases.length) throw new Error('The number of cases does not match the input');

    // Remove the first line
    cases[0] = firstCaseSplit.slice(1).join('\n');

    // Return the splitted cases
    return cases;
}

/**
 * Convert a case from string to a number matrix
 *
 * @param input the case to be converted
 * @returns the matrix of the number
 */
export function parseCase(input: string): Matrix {
    const lines = input.split('\n');

    // Check if the first line has the pattern "n m"
    if (!/^\d+ \d+$/.test(lines[0])) throw new Error('First line does not match the expected pattern');

    // Get the size of the case, i.e. n, m
    const firstLine = lines[0].split(' ');
    const [n, m] = firstLine.map(Number);

    // Check if the number of rows = n
    if (lines.length !== n + 1) throw new Error('The number of rows does not match with the first line');

    // Check if each row has m character 0/1
    const rowRegex = new RegExp('^[0,1]{' + m + '}$');
    for (let i = 0; i < n; i++) {
        if (!rowRegex.test(lines[i + 1])) throw new Error(`Invalid input for the row ${i + 1}`);
    }

    // Generate the matrix
    const matrix: Matrix = [];
    for (const l of lines.slice(1)) {
        matrix.push(Array.from(l).map(Number));
    }

    // Return the matrix
    return matrix;
}
