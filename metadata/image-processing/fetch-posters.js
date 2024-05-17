const fs = require('fs');
const { join } = require('path');

const rawImagesDir = join(__dirname, 'poster', 'product');

const OFFSET = 170;

(async () => {
    [...Array(30)].forEach(async (_, index) => {
        const url = `https://www.hythacg.com/shop/p/highrise${`${
            index + OFFSET + 1
        }`.padStart(2, '0')}`;

        try {
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
                join(rawImagesDir, `${index + OFFSET}.jpg`),
                buffer
            );
        } catch (e) {
            console.log(url);
            // console.log(e);
        }
    });
})();
