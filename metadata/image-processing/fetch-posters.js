const fs = require('fs');
const { join } = require('path');

const rawImagesDir = join(__dirname, 'poster', 'product');

(async () => {
    [...Array(10)].forEach(async (_, index) => {
        try {
            const url = `https://www.hythacg.com/prints/highrise${`${
                index + 86
            }`.padStart(2, '0')}`;

            const res = await fetch(url);
            const text = await res.text();

            const dataLoadIndex = text.indexOf(`data-load="false"`);
            const slicedText = text.slice(dataLoadIndex);

            const dataImageIndex = slicedText.indexOf('data-image');
            const dataSrcIndex = slicedText.indexOf('data-src');

            const dataSrc = slicedText
                .slice(dataSrcIndex + 9, dataImageIndex)
                .split(`"`)
                .join('')
                .trim();

            const image = await fetch(dataSrc);
            const blob = await image.blob();
            const buffer = Buffer.from(await blob.arrayBuffer());

            fs.promises.writeFile(
                join(rawImagesDir, `${index + 85}.jpg`),
                buffer
            );
        } catch (e) {
            console.log(e);
        }
    });
})();
