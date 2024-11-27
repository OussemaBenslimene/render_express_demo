const express = require('express');
const cors = require('cors');
const app = express();
const parser = require('body-parser')

app.use(parser.json());

// Activer CORS pour toutes les requêtes
app.use(cors());



app.get('/dorra', (req, res) => {
    res.send({message : "nheebk barcha y dardourty"});
  });

// Lancer le serveur sur le port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
