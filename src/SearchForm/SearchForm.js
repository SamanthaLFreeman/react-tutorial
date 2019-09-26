import React, { Component } from 'react';

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      search: ""
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    const pokemonName = this.state.search
    this.props.nextPokemon(pokemonName, e)
    this.setState({
      search: ""
    })
  }

  render() {
    return (
      <form>
        <input 
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>SEARCH</button>
      </form>
    )
  }
}

export default SearchForm