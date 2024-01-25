const restoreUserJourney = require('./index');
const testData = require('./testData.json');

describe('restoreUserJourney', () => {
    it('should correctly restore a journey with a clear start and end', () => {
        const tickets = [
            { source: "New York", destination: "London" },
            { source: "London", destination: "Paris" },
            { source: "Paris", destination: "Berlin" }
        ];
        expect(restoreUserJourney(tickets)).toBe("New York, London, Paris, Berlin");
    });

    it('should return error for incomplete data', () => {
        const tickets = [
            { source: "New York", destination: "London" },
            { source: "Paris", destination: "Berlin" }
        ];
        expect(restoreUserJourney(tickets)).toBe("Error: Journey path is broken or incomplete. Not all destinations are connected.");
    });

    it('should return error if no starting point can be found', () => {
        const tickets = [
            { source: "London", destination: "Paris" },
            { source: "Paris", destination: "London" }
        ];
        expect(restoreUserJourney(tickets)).toBe("Error: Starting point of the journey cannot be determined.");
    });

    it('should handle a journey with 100,000 hops', () => {
        const expectedJourney = [];
        for (let i = 0; i < 100000; i++) {
            expectedJourney.push(`City${i}`);
        }
        const expectedOutput = expectedJourney.join(", ");
        expect(restoreUserJourney(testData)).toBe(expectedOutput);
    });
});
