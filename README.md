# Dott Assessment
This is my submission to an assessment given by Dott.



## Question

Here is the question sent by Dott.

### Task
There is given a rectangular bitmap of size n*m. Each pixel of the bitmap is either white or black, but at least one is white. The pixel in i-th line and j-th column is called the pixel (i,j). The distance between two pixels p1=(i1,j1) and p2=(i2,j2) is defined as d(p1,p2)=|i1-i2|+|j1-j2|.

Write a program which:

- reads the description of the bitmap from the standard input;
- for each pixel, computes the distance to the nearest white;
- writes the results to the standard output.

### Input
The number of test cases t (1≤t≤1000) is in the first line of input, then t test cases follow separated by an empty line. In the first line of each test case there is a pair of integer numbers n, m separated by a single space, 1<=n <=182, 1<=m<=182. In each of the following n lines of the test case exactly one zero-one word of length m, the description of one line of the bitmap, is written. On the j-th position in the line (i+1), 1 <= i <= n, 1 <= j <= m, is '1' if, and only if the pixel (i,j) is white.

### Output
In the i-th line for each test case, 1<=i<=n, there should be written m integers f(i,1),...,f(i,m) separated by single spaces, where f(i,j) is the distance from the pixel (i,j) to the nearest white pixel. 

### Example:
Input:
```
1
3 4
0001
0011
0110
```
Output:
```
3 2 1 0
2 1 0 0
1 0 0 1
```



## Solution

In order to solve the problem, we parse the input and split it into a list of matrices. Then we concatenate the formatted answer, after calculating the *distance matrix* for each input matrix. 

### Distance matrix

For getting the distance matrix, we iterate over all entities and calculate the minimum distance of that entity to a value of 1.

### Minimum distance

This is where the magic happens. In order to find the closest 1 to each entity, we consider the list of coordinates that are located at the distance of r from that entity. Then gradually increase r from 0 to m+n-2 to hit a value of 1 for the first time.

Notice that we are using [Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry), therefore the points at the distance of r form a rhombus instead of a circle.

### Overview

In a nutshell, the following steps are taken in order to solve the problem

- Splitting the input cases to a list of strings
- Parsing each case from string to a matrix of numbers
- Iterating over all entities of the matrix
  - Increasing the radius of a rhombus around each point
    - Looking for a value of 1 in the rhombus
- Formatting each matrix into the standard output format
- Putting an empty line between outputs



## Getting started

In order to run the code, clone it into a directory. Then run

```
npm install
npm start
```

Doing this, a sample input value will be examined. In order to change the input, enter your desired input in `src/main.ts` and run `npm start` again.

Make sure that your input is compatible with the aforementioned standard. You will get a descriptive error if it is violating the standard.

### Useful commands

#### Testing

You may run `npm test` to check if the code is working properly. More than 20 tests are designed to check if everything functions well. Also wrong inputs and edge cases are passed into the functions to tests their behavior

#### Linting

By running `npm run lint` you can be sure that the code is neat and well-organized enough.

