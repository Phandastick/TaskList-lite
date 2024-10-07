const fs = require('node:fs').promises;

class getRecords {
    async getData(){
        try {
            const data = await fs.readFile('./public/data.txt', 'utf8'); // Await the Promise
            const records = data.split('\n');
            const resultArray = [];
    
            records.forEach(record => {
                const recordSplit = record.split(',');
                const newRecord = {
                    'taskName': recordSplit[0],
                    'taskDesc': recordSplit[1],
                    'taskDeadline': recordSplit[2]
                };
                resultArray.push(newRecord);
            });
    
            console.log(resultArray);
            return resultArray;  // Return the parsed data
        } catch (err) {
            console.error('Error reading file:', err);
            return null; // Return null if there is an error
        }
    }
}

module.exports = getRecords