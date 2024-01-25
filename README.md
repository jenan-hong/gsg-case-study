# Project Title

## Description

This project includes a JavaScript function `restoreUserJourney` designed to reconstruct travel paths from a set of tickets, each indicating a journey from a source city to a destination city.

## Installation

To get started with this project, you need to have Node.js installed on your machine.

**Install dependencies:**
    - This project uses Jest for testing. Install Jest and any other dependencies by running:
      ```bash
      npm install
      ```
## Testing

To run the tests for the `restoreUserJourney` function:

1. **Generate test data for large test cases (optional):**
    - If you need to generate test data (e.g., for 100,000 hops), run:
      ```bash
      node generateTestData.js
      ```
    - This will create a `testData.json` file used in the tests.

2. **Run tests:**
    - Execute the test suite using Jest:
      ```bash
      npm test
      ```

## Function Description

### `restoreUserJourney`

- **Purpose:** Reconstructs a travel path from a set of unordered tickets, each with a source and destination city.
- **Input:** An array of ticket objects (e.g., `[{ source: "CityA", destination: "CityB" }, ...]`).
- **Output:** A string representing the ordered path of travel, or an error message if the path cannot be determined or is incomplete.

## Test Cases

1. **Normal Case**: Tests if the function correctly restores a journey with a clear start and end.
2. **Incomplete Data**: Checks how the function behaves when the journey cannot be completed due to missing tickets.
3. **No Starting Point**: Tests the function's response when there is no identifiable starting point in the tickets.
4. **Large Data Set (100K hops)**: Assesses the function's performance and accuracy with a very large number of tickets.
