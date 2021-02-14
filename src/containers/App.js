import React, { Component } from "react";
import CardList from "../components/CardList";
import { seedlings } from "../seedlings";
import SearchBox from "../components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      seedlings: seedlings,
      searchfield: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredSeedlings = this.state.seedlings.filter(seedling => {
      return seedling.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>Seedling Catalog</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList seedlings={filteredSeedlings} />
      </div>
    );
  }
}

export default App;
