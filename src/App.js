import React, { Component } from 'react';
import logo from './logo.svg';
import GraphiQL from 'graphiql'
import axios from 'axios'
import 'graphiql/graphiql.css'
import './App.css';

function graphQLFetcher(graphQLParams) {
  return axios.post('http://localhost:3001/graphql', graphQLParams)
    .then(response => response.data);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <GraphiQL fetcher={graphQLFetcher} editorTheme="solarized dark" />
      </div>
    );
  }
}

export default App;
