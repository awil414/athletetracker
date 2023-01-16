import React from 'react';
import "./App.css";
import LoginForm from './components/Home/LoginForm';
import SignUp from './components/Home/SignUp';
import Athlete from './components/Athlete/Athlete';
import Dashboard from './components/Dashboard/Dashboard';
import Wods from './components/Wods/Wods';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path='/' component={LoginForm} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/athlete' component={Athlete} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/wods' component={Wods} />
        </Routes>
    </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
