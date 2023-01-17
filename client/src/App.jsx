import React from 'react';
import "./App.css";
import LoginForm from './components/Home/LoginForm';
import SignUp from './components/Home/SignUp';
import Athlete from './components/Athlete/Athlete';
import Dashboard from './components/Dashboard/Dashboard';
import Wods from './components/Wods/Wods';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
//login auth
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client = { client }>
    <Router>
      <div className="align-center title">
        <Navbar />
        <div className='container home'>
          <LoginForm />
          <SignUp />
        </div>
        <div>
          <Athlete />
          <Dashboard />
          <Wods />
        </div>
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
