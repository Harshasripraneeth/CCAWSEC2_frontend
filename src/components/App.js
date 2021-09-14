import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './authentication/Login'
import Register from './authentication/Register'
import './App.css';
import Home from './Home'
function App() {

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email:""
    });

    const logIn = (data) => {
        setUser({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email
        })
    }

  return (
    <div className="App">

          <Router>

              <Switch>
                  <Route exact path="/" render={(props) => {

                      return <Home {...props}  user={user} />

                  }} />

                  <Route exact path="/login" render={(props) => {

                      return <Login {...props}  user={user} onSuccess={logIn} />

                  }} />

                  <Route path="/register" render={(props) => {
                      return <Register  {...props} details={user} onSuccess={logIn} />
                  }} />

              </Switch>

          </Router>

    </div>
  );
}

export default App;
