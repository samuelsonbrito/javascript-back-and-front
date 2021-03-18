const { json, request, response } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

const users = [];

app.post("/user", (request, response) => {

    const user = request.body;

    const newUser = {
        id: user.id,
        name: user.name,
        email: user.email
    }

    users.push(newUser);

    return response.status(201).json(newUser);

});

app.get("/user", (request, response) => {

    return response.status(200).json(users);

});

app.put("/user/:id", (request, response) => {

    let userId = request.params;
    let user = request.body;

    let updateUser;

    users.map((element) => {
        if (element.id == userId.id) {
            updateUser = element.name = user.name;
            return updateUser;
        }
    });

    return response.status(200).json(updateUser);

});

app.delete("/user/:id", (request, response) => {

    let userId = request.params;

    let index = users.findIndex(element => element.id == userId.id);
    let userName = users[index].name;

    users.splice(index, 1);

    return response.status(204).json(userName);

});

const port = 3333;

app.listen(port, () => {
    console.log(`Porta ${port} rodando...`)
})