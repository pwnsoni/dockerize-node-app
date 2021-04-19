const express = require('express');
const app = express();

const HOST = 3000;

app.get('/', (req, res) => {
    res.status(200).send({body: 'Hi From Docker', statusCode: 200})
})

app.listen(HOST, (err) => {
    if (!err) console.log(`listening on ${HOST}`);
    else console.log('Error', JSON.stringify(e))
})