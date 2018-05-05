const cheerio = require('cheerio')

function selectRowContents($, table, type) {
    const elements = [];
    $(table).find(`tr ${type}`).each((i, elem) => {
        const element = $(elem).text().trim();
        elements.push(element);
    });
    return elements;
}

function selectStats(html) {
    const $ = cheerio.load(html);
    const table = $('table').get(0);
    const headers = selectRowContents($, table, 'th');
    const content = selectRowContents($, table, 'td');
    return join(headers, content)
}

const join = (headers, content) => headers.map((header, i) => {
    const entry = {};
    entry[header] = content[i];
    return entry;
})

module.exports = {
    selectStats,
}
