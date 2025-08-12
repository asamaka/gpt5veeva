const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'QA_SCORECARD.md');
const now = new Date().toISOString();
let md = fs.readFileSync(file, 'utf8');
md += `\n\n<!-- updated ${now} -->\n`;
fs.writeFileSync(file, md);
console.log('QA_SCORECARD.md updated');