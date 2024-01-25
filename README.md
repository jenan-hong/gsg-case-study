# Restore User Journey

## Description

This project includes a JavaScript function `restoreUserJourney` designed to reconstruct travel paths from a set of tickets, each indicating a journey from a source city to a destination city.

## Project setup
```
npm install
```

## Run tests
```
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
