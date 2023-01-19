import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home/home.jsx";
import LoginForm from "./components/LoginForm.jsx";
import SignUp from "./components/SignUp";
import Athlete from "./components/Athlete/Athlete";
import NewAthlete from "./components/NewAthlete/NewAthlete";
import Update from "./components/Athlete/Update";
import Dashboard from "./components/Dashboard/Dashboard";
import Wods from "./components/Wods/Wods";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Auth from "./utils/auth";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Router>
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
    </Router> */}
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={Auth.loggedIn() ? <Dashboard /> : <Home />}
            />
            <Route exact path="/search" element={<Athlete />} />
            <Route exact path="/add" element={<NewAthlete />} />
            <Route exact path="/update" element={<Update />} />
            <Route element={() => <h1 className="display-2">Wrong page!</h1>} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
