const fs = require('fs');
const { join } = require('path');

(async () => {
    const dir = join(__dirname, 'bulk', 'raw');
    const files = await fs.promises.readdir(dir);

    files.forEach(async (file) => {
        const [fileName, fileExt] = file.split('.');

        fs.promises.copyFile(
            join(dir, file),
            join(__dirname, 'bulk', 'dist', `${fileName} x.${fileExt}`)
        );
    });
})();
