const express = require('express');
const path = require('path')
const fetch = require('node-fetch')
const storage = require('./storage')

const app = express();
const port = 3150;

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/api/pokemon', (req, res) => {
  let pokemon = req.query.pokemon.toLowerCase();

  // get data from /pokemon
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then(request => {
    if (request.ok) return request.json()
    else res.send('ERROR')
  })
  .then(data => {
    storage.id = data.id;
    storage.name = data.name;
    storage.abilities = data.abilities.map((e) => e.ability.name);
    storage.moves = data.moves.map((e) => e.move.name);
    storage.types = data.types.map((e) => e.type.name);

    // get all posibile locations for the pokemon
    fetch(data.location_area_encounters)
    .then(resLoc => {
      if (resLoc.ok) return resLoc.json()
      else res.send('ERROR: in search location')
    })
    .then(data => {
      storage.locations = data.map((e) => e.location_area.name)
      res.send(storage)
      // get data from /pokemon-species
      // fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
      // .then(() => {

      // })
    })
  })
})

app.listen(port, () => console.log(`Pokedex on port: ${port}`))