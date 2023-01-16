import React from 'react';
import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
const httpLink = createHttpLink({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
//login auth
const client = new ApolloClient({
  link: httpLink,
})

function App() {
  return (
    <ApolloProvider client = { client }>

    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </ApolloProvider>
  );
}

export default App;
