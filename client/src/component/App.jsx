import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      pokemon: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    fetch('./api/pokemon', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({pokemon: this.state.search}),
    })
    .then((res) => {
      return res.json();
    })
    .then(data => {
      if (data.error) alert(data.error + ` name/id "${this.state.search}". \nTips: You can enter the Pokemon name or id.\nIf the Pokemon has many variants, please enter the name with the variant or the pokemon\'s id`);
      else (console.log(data));
    })
  };

  handleChange(e) {
    this.setState({search: e.target.value})
  };

  render() {
    return (
      <div>
        <div>POKEDEX</div>
        <form onSubmit={this.handleSearch}>
          <input onChange={(e) => this.handleChange(e)}></input>
          <button>Search</button>
        </form>
      </div>
    )
  };
};

export default App;