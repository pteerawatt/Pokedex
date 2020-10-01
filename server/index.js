const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const storage = require('./storage');

const handleRequest = require('./handleRequest')
const evolution = require('./evolution');
const storePokemon = require('./storePokemon');
const storeSpecies = require('./storeSpecies');

const app = express();
const port = 3150;

app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, '../client/dist')));

// app.post('/api/pokemon', (req, res) => {
//   const pokemon = req.body.pokemon.toLowerCase();
//   const pokeapi = 'https://pokeapi.co/api/v2/';
//   fetch(`${pokeapi}pokemon/${pokemon}`)
//   .then(resp => {
//     return resp.json()
//   })
//   .then(data => {
//     res.send(data)
//   })
//   .catch(err => {
//     console.log(err)
//     res.send({err: 'ERROR'})
//   })
// })

app.post('/api/pokemon', (req, res) => {
  const pokemon = req.body.pokemon.toLowerCase();
  const pokeapi = 'https://pokeapi.co/api/v2/';

  // get data from /pokemon
  fetch(`${pokeapi}pokemon/${pokemon}`)
  .then(request => handleRequest(res, request, 'pokemon'))
  .then(data => {
    storePokemon(data);

    // get all posibile locations for the pokemon
    fetch(data.location_area_encounters)
    .then(resLoc => handleRequest(res, resLoc, 'location'))
    .then(data => {
      storage.locations = data.map((e) => e.location_area.name);
      
      //get data from /pokemon-species
      fetch(`${pokeapi}pokemon-species/${storage.id}`)
      .then(resSpec => handleRequest(res, resSpec, 'species'))
      .then(data => {
        storeSpecies(data);

        // get evolution chain
        fetch(data.evolution_chain.url)
        .then(resEvo => handleRequest(res, resEvo, 'evolution chain'))
        .then(data => {
          storage.evolution = evolution(data.chain);
          res.send(storage)
        })
      })
    })
  })
  .catch(err => console.log(err));
})

app.listen(port, () => console.log(`Pokedex on port: ${port}`))