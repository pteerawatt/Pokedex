const express = require('express');
const path = require('path')
const fetch = require('node-fetch')

const app = express();
const port = 3150;

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/api/pokemon', (req, res) => {
  let pokemon = req.query.pokemon.toLowerCase();
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => res.send(data))
    .catch((err) => console.log(err))
})

app.listen(port, () => console.log(`Pokedex on port: ${port}`))