const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const pacientes = [];

app.post("/paciente", (request, response) => {

    try {

        let paciente = request.body;

        let novoPaciente = {
            id: Math.random(),
            nome: paciente.nome,
            email: paciente.email,
            teste_covid: paciente.teste_covid,
            tomou_vacina: paciente.tomou_vacina
        }

        if (paciente.nome == "") {
            throw Error("Campo nome vazio")
        }

        if (paciente.email == "") {
            throw Error("Campo email vazio")
        }

        pacientes.push(novoPaciente);

        return response.status(201).json(novoPaciente);

    } catch (error) {

        return response.status(400).json({
            error: error.message
        });

    }

});

app.get("/paciente", (request, response) => {

    return response.status(200).json(pacientes);

});

app.put("/paciente/:id", (request, response) => {

    let id = request.params.id;
    let paciente = request.body;

    let updatePaciente;

    pacientes.map((element) => {
        if (element.id == id) {

            updatePaciente = element.nome = paciente.nome;
            updatePaciente = element.email = paciente.email;
            updatePaciente = element.teste_covid = paciente.teste_covid;
            updatePaciente = element.tomou_vacina = paciente.tomou_vacina;

            return updatePaciente;
        }
    });

    return response.status(200).json(updatePaciente);

});

app.delete("/paciente/:id", (request, response) => {

    let id = request.params.id;

    let indice = pacientes.findIndex(element => element.id == id);
    pacientes.splice(indice, 1);

    return response.status(204).json();

});

//subir o server
const port = 3333;

app.listen(port, () => {

    console.log(`Rodando na porta ${port}`);

});