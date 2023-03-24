import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Galclass from './components/pages/Galclass';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/galclass' exact component={Galclass} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
