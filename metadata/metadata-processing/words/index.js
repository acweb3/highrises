const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const reader = require('any-text');

const asyncReaddir = promisify(fs.readdir);

(async () => {
    const rawImagesDir = join(__dirname, 'raw');

    const files = await asyncReaddir(rawImagesDir);

    files.forEach(async (file) => {
        const index = parseInt(file.split(' ')[0]);
        const text = await reader.getText(join(__dirname, 'raw', file));
        const cleaned = text.replace('Poster Text:', '').trim();
        fs.writeFileSync(
            join(__dirname, 'dist', `${index - 1}.txt`),
            cleaned,
            'utf8'
        );
    });
})();
