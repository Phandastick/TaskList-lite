const { isUtf8 } = require('node:buffer');
const fs = require('node:fs');

class getRecords {
    async getData(){ 
        fs.readFile('./public/data.txt', 'utf8', (err, data) => {
            if(err) {
                console.error(err);
                return null;
            }
            console.log(data)
            return JSON.stringify(data)
        })
    }
}

module.exports = getRecords