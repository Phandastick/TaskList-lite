const express = require('express')
const app = express()
const port = 6969
const getRecords = require('./classes/getRecords.js')
const addRecords = require('./classes/addRecords.js')
const bodyParser = require('body-parser')

app.use(express.json()) // for parsing application/json
app.use(express.static('public'))

const addRecordsClass = new addRecords();

//routes

app.get('/', (req, res) => {
    res.send('HI')
})

app.get('/taskList/doGetAllRecords', (req,res) => {
    getRecords();
    res.sendStatus(200).send(records);
})

app.post('/taskList/doAddNewRecord', async (req,res) => {
    const body = req.body
    var array = []
    var count = 0
    body.forEach(e => {
        console.log(e);
        array[count] = e;
        count++
    });

    console.log('Received Post')

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
