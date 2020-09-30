const storage = require('./storage');

module.exports = (data) => {
  storage.color = data.color.name;
  storage.genders = data.gender_rate;

  storage.varieties = data.varieties.map(e => {
    const url = e.pokemon.url.split('/');
    const urlId = url[url.length - 2];
    if (urlId != storage.id) return {id: urlId, name: e.pokemon.name};
  })
};