const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const storage = require('./storage');
const evolution = require('./evolution');

const app = express();
const port = 3150;

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/api/pokemon', (req, res) => {
  let pokemon = req.query.pokemon.toLowerCase();

  // get data from /pokemon
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then(request => {
    if (request.ok) return request.json();
    else res.send('ERROR: cannot search pokemon');
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
      if (resLoc.ok) return resLoc.json();
      else res.send('ERROR: cannot search location');
    })
    .then(data => {
      storage.locations = data.map((e) => e.location_area.name);
      
      //get data from /pokemon-species
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${storage.id}`)
      .then(resSpec => {
        if (resSpec.ok) return resSpec.json();
        else res.send('ERROR: cannot search species');
      })
      .then(data => {
        storage.color = data.color.name;
        storage.genders = data.gender_rate;

        storage.varieties = data.varieties.map(e => {
          const url = e.pokemon.url.split('/');
          const urlId = url[url.length - 2];
          if (urlId != storage.id) return {id: urlId, name: e.pokemon.name};
        })

        // get evolution chain
        fetch(data.evolution_chain.url)
        .then(resEvo => {
          if (resEvo.ok) return resEvo.json();
          else res.send('ERROR: cannot search evolution');
        })
        .then(data => {
          storage.evolution = evolution(data.chain);
          res.send(storage)
        })
      })
    })
  })
})

app.listen(port, () => console.log(`Pokedex on port: ${port}`))