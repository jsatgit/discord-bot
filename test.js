const fs = require('fs');
const selectors = require('./selectors');

function testSelectors() {
    fs.readFile('./sample.html', 'utf8', (err, html) => {
        console.log(selectors.selectStats(html))
    })
}

function test() {
    testSelectors();
}

test();
