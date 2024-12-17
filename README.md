# Unhandled Promise Rejection in Node.js

This repository demonstrates a common error in Node.js applications: unhandled promise rejections. The `bug.js` file contains code that reads a file asynchronously. If the file does not exist or there is an error during reading, the promise will reject. However, if this rejection is not handled, it will result in a silent failure.

The `bugSolution.js` file provides a corrected version that handles the potential rejection using a `catch` block, ensuring that any errors are properly logged and handled, preventing unexpected application behavior.

## Running the code

1.  Clone the repository.
2.  Navigate to the repository directory.
3.  Run `node bug.js` to see the unhandled rejection.
4.  Run `node bugSolution.js` to see the proper handling of the rejection.