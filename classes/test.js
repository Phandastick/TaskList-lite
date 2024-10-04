const fs = require('node:fs');

fs.readFile('./public/data.txt', 'utf8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log(data)
    this.data = data;
})