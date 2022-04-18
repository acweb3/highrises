const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');

(async () => {
    const rawText = fs.readFileSync(
        join(__dirname, 'raw', 'buildings.txt'),
        'utf-8'
    );

    const rawTextLines = rawText.split('--');
    const buildingsText = rawTextLines.map((line) => {
        return line
            .split('\n')
            .filter((paragraph) => paragraph.split(' ').length > 5)
            .join('\n');
    });

    buildingsText.forEach(async (text, index) => {
        fs.writeFileSync(join(__dirname, 'dist', `${index}.txt`), text, 'utf8');
    });
})();
