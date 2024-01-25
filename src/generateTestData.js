const fs = require('fs');

function generateHops(n) {
    const tickets = [];
    for (let i = 0; i < n - 1; i++) {
        tickets.push({ source: `City${i}`, destination: `City${i + 1}` });
    }
    return tickets;
}

const testData = generateHops(100000);
fs.writeFileSync('testData.json', JSON.stringify(testData));
