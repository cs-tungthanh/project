const fs = require('fs');
const path = require('path')

const createFolder = async (folderPath, recursive) => {
    const errStr = 'Failed to create directory';
    try {
        if (!fs.existsSync(folderPath)) {
            return new Promise((resolve, reject) => {
                fs.mkdir(folderPath, { recursive }, (e) => {
                    if (e) { reject(new Error(`${errStr}: ${e}`)); }
                    resolve(true);
                });
            });
        }
        return Promise.resolve(true);
    } catch (err) {
        return Promise.reject(new Error(errStr));
    }
};

const main = async () => {
    const folderPath = path.resolve(__dirname, 'hello/hi');
    const check = await createFolder(folderPath, true);
    console.log('hi',check);
}

main();
