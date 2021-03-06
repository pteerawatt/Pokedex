import React from 'react';
import GenInfo from './GenInfo.jsx';
import History from './History.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      pokemon: {},
      history: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchPokemon = this.searchPokemon.bind(this);
  }

  // search for pokemon by id or name
  searchPokemon(nameOrId) {
    fetch('./api/pokemon', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({pokemon: nameOrId}),
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (data.error) alert(data.error + ` name/id "${nameOrId}". \nTips: You can enter the Pokemon name or id.\nIf the Pokemon has many variants, please enter the name with the variant or the pokemon\'s id`);
      else {
        this.setState({ pokemon: data });
        const newHist = [...this.state.history, data.name.split('-').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')];
        this.setState({ history: newHist });
      }
    })
  }

  // submit response to search pokemon
  handleSearch(e) {
    e.preventDefault();
    this.searchPokemon(this.state.search);
  };

  // update search state to input value
  handleChange(e) {
    this.setState({search: e.target.value})
  };

  render() {
    return (
      <div className="app">
        <div className="header">
          <h1 className="header-text">Pokédex</h1>
          <form className="search-box" onSubmit={this.handleSearch}>
            <input onChange={this.handleChange}></input>
            <button>Search</button>
          </form>
        </div>
        <div className="main-display-wrapper">
          <div className="gen-info-wrapper">
            {this.state.pokemon.id ? <GenInfo info={this.state.pokemon} searchPokemon={this.searchPokemon}/> : <div>Search for a Pokémon with Pokémon's name or Id</div>}
          </div>
          <History searchPokemon={this.searchPokemon} history={this.state.history}/>
        </div>
      </div>
    )
  };
};

export default React.memo(App);
