const express = require('express')
const app = express()
const port = 6969
const getRecords = require('./classes/getRecords.js')
const addRecords = require('./classes/addRecords.js')
const bodyParser = require('body-parser')

app.use(express.json()) // for parsing application/json
app.use(express.static('public'))

const addRecordsClass = new addRecords();
const getRecordsClass = new getRecords();

//routes

app.get('/', (req, res) => {
    res.send('HI')
})

app.get('/taskList/doGetRecords', async function(req, res) {
    console.log('Received GET request for doGetRecords...');

    const payload = await getRecordsClass.getData();  // Call the async function

    
    if (payload) {
        res.json({ message: 'GET request received!', data: payload }); // Send the parsed data
    } else {
        res.sendStatus(400); // Send a 400 status code if there's an error
    }
});


app.post('/taskList/doAddNewRecord', async (req,res) => {
    console.log('Received Post')
    
    const body = req.body
    var array = []
    var count = 0
    body.forEach(e => {
        console.log(e);
        array[count] = e;
        count++
    });


    await addRecordsClass.writeFile(array)
    .then(function (success){
        console.log(success);
    })
    .then(function(err){
        console.error(err);
    })


    console.log('Written to file successfully');
    res.sendStatus(200);
})

app.patch('/taskList/doPatchRecord', (req,res) => {
    
})


app.listen(port, () =>{
    console.log('Server Started on port: ' + port)
})
