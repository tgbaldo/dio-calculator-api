const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (request, response) => {
    response.json('Hello World');
});

app.get('/soma/:num1/:num2', async (request, response) => {
    const result = Number(request.params.num1) + Number(request.params.num2);
    response.json({ result });
});

app.listen(4000, () => {
    console.log('Api UP!');
});