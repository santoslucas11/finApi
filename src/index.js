const express = require('express');
const { v4: uuidv4 } = require('uuid')

const app = express();

app.post("/account/:id", (request, response) => {
    const { cpf, name } = request.body;

    const id = uuidv4();

})

app.listen(3333);