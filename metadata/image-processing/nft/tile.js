const IIIF = require('iiif-processor');
const fs = require('fs');

function streamResolver({ id, baseUrl }) {
    let imagePath = './tile/' + id.match(/.{1,2}/g).join('/') + '/image.tif';
    return fs.createReadStream(imagePath);
}

(async () => {
    let url = 'http://iiif.example.com/iiif/2/abcdefgh/full/400,/0/default.jpg';
    let processor = new IIIF.Processor(url, streamResolver);
    try {
        let result = await processor.execute();
        console.log(result);
        // return result;
    } catch (err) {
        console.log(err);
    }
})();
