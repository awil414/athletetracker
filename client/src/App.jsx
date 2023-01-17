import React from 'react';

/*import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';


import Navbar from '../src/components/Navbar/Navbar';
import LoginForm from '../src/components/Home/LoginForm';
import Signup from '../src/components/Home/SignUp';

import "./App.css";


const httpLink = createHttpLink({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
//login auth
const client = new ApolloClient({
  link: httpLink,
})

function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={LoginForm}/>
            <Route exact path='/signup' component={Signup}/>
            <Route render={() => <h1 className='display-2'>Wrong Page</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>

  );
}

export default App;*/

import LoginForm from '../src/components/Home/LoginForm';
import './App.css'

function App (){
  return(
    <div className='App'>
      <LoginForm />
    </div>
  )
}

export default App