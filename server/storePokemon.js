let storage = require('./storage');

module.exports = (data) => {
    storage.id = data.id;
    storage.name = data.name;
    storage.abilities = data.abilities.map((e) => e.ability.name);
    storage.moves = data.moves.map((e) => e.move.name);
    storage.types = data.types.map((e) => e.type.name);
}