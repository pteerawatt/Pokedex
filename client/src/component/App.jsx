import React from 'react';
import ReactDOM from 'react-dom';

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
      // if (res.ok) return res.json();
      // else alert('something went wrong')
      return res.json()
    })
    .then(data => console.log(data ? data : {}))
    .catch(err => console.log(err))
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