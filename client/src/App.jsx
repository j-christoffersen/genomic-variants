import React, { Component } from 'react';
import Table from './Table';
import dummyData from './dummyData';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // gene: null,
      variants: dummyData,
    };
  }

  render() {
    return (
      <Table variants={this.state.variants} />
    );
  }
}

export default App;
