import { getDistanceMatrix } from './distance';
import { formatMatrix } from './formatter';
import { splitCases, parseCase } from './parser';

/**
 * @param input the list of cases in the standard input format
 * @returns the list of the distance matrices in the standard output format
 */
export function run(input: string): string {
    // Splitting the cases
    const splittedCases = splitCases(input);
    // Initializing the list of results
    const formattedResults: string[] = [];

    for (const cs of splittedCases) {
        const inputMatrix = parseCase(cs);
        const distanceMatrix = getDistanceMatrix(inputMatrix);
        const formattedMatrix = formatMatrix(distanceMatrix);
        formattedResults.push(formattedMatrix);
    }

    // Adding empty line between distance matrices
    const result = formattedResults.join('\n\n');

    // Returning the result
    return result;
}
