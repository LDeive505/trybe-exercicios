const express = require('express');
const { Store } = require("./models");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
	Store.findAll().then(stores => {
		res.status(200).json(stores);
	}).catch((error) => {
		console.log(error.message);
		res.status(500).json({message: 'Erro ao buscar as lojas'});
	});
});

app.all('*', function (req, res) {
 	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(PORT, () => { console.log(`Ouvindo na porta ${PORT}`) });