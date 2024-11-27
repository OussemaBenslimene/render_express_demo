const express = require('express');
const cors = require('cors');
const app = express();
const parser = require('body-parser')

app.use(parser.json());

// Activer CORS pour toutes les requêtes
app.use(cors());

// Définir une route GET pour /hello
app.get('/hello', (req, res) => {
  res.send({message : "yaatk aasba"});
});

// Lancer le serveur sur le port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
