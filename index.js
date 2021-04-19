const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({body: 'Hi From Docker', statusCode: 200})
})

app.listen(3000, (err) => {
    if (!err) console.log('listening on 3000');
    else console.log('Error', JSON.stringify(e))
})