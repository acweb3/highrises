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
        const paragraphs = line.split('\n');

        const title = paragraphs.find((paragraph) => {
            return /^[0-9]/.test(paragraph);
        });
        const [rawIndex] = title.split(' ');
        const index = parseInt(rawIndex) - 1;

        return {
            index,
            content: paragraphs
                .filter((paragraph) => {
                    // make a (maybe dumb) assumption that a title will start w a number
                    const isTitle = /^[0-9]/.test(paragraph);
                    return !isTitle;
                })
                .filter(Boolean)
                .join('\n'),
        };
    });

    buildingsText.forEach(async ({ content, index }) => {
        fs.writeFileSync(
            join(__dirname, 'dist', `${index}.txt`),
            content,
            'utf8'
        );
    });
})();
