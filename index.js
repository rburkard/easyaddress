console.log('Is this working? No way');

const express = require('express');
const Datastore = require('nedb')

const app = express();
app.listen(3000, () => console.log('Listening at 3k'))
app.use(express.static('public'));

app.post('/api', (request, response) => {
    console.log('I got a request');
    console.log(request);   
});

//const database = new Datastore('database_easyaddress.db');
//database.loadDatabase();

//const data = 'No friggin way, it is here?!'

//database.insert(data)