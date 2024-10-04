const fs = require('node:fs');

class addRecords {
    async writeFile(array){
        var writeString = '';
        // array = JSON.stringify(array);
        console.log('> Writing array' + array);

        console.log("> writing file...")
        array.forEach(record => {
            console.log('> Writing record ' + record)
            let taskName = record.taskName;
            let taskDesc = record.taskDesc;
            let taskDeadline = record.taskDeadline;

            console.log('Task Name: ' + taskName)
            console.log('Task Description: ' + taskDesc)
            console.log('Task Deadline: ' + taskDeadline)

            let writeLine = taskName.concat(',',taskDesc.concat(',',taskDeadline));
            writeString += writeLine;
            writeString += '\n';
        });

        console.log(writeString);

        fs.writeFile('./public/data.txt',writeString, (err) => {
            if(err)
                console.error('Error Occured: ' + err);
            console.log('Successfully written file')
        });
    }
}

module.exports = addRecords