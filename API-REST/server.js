const express = require('express');
const app = express();
const data = require('./data.json')

app.use(express.json());

// resource = entidade
// verbos HTTP - get, post, put, delete
// get: Receber dados de um resource
// POST: Enviar dados ou informações para serem processados por um resource
// PUT: Atualizar dados de um Resource
// DELETE: Deletar um Resource

app.get('/clients', function (req, res) {
    res.json(data);
});

app.get('/clients/:id', function (req, res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json();

    res.json(client);
});

app.post('/clients', function (req, res) {

    const { name, email } = req.body;

    // salvar
    res.json({ name, email });
});

app.put('/clients/:id', function (req, res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json();

    const { name } = req.body;
    client.name = name;

    res.json(client);
});

app.delete('/clients/:id', function (req, res) {
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id);

    res.json(clientsFiltered);
});

app.listen(3001, () => {
    console.log('Server is running');
});

// https://github.com/rocketseat-content/youtube-api-rest-restful/blob/master/data.json