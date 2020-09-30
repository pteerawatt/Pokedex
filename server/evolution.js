// this function handles finding evolutions from the chain

module.exports = (chain) => {
  if (!chain.evolves_to.length) return [];
  let result = [];

  const recurse = (obj) => {
    const species = obj.species;
    const url = species.url.split('/');
    const id = url[url.length -2];
    result.push({id: id, name: species.name});

    if (obj.evolves_to.length) recurse(obj.evolves_to[0]);
  }

  recurse(chain);
  return result;
}