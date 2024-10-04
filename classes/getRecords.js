const { isUtf8 } = require('node:buffer');
const fs = require('node:fs');

class getRecords {
    constructor(file){
        fs.readFile('./public/data.txt', 'utf8', (err, data) => {
            if(err) {
                console.error(err);
                return;
            }
            console.log(data)
            this.data = data;
        })
    }

    parseData(){
        
    }

    getData(){ 
        let parsedData = parseData();
        return parsedData; 
    }
}

module.exports = getRecords