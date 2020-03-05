import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import ContactPage from './containers/ContactPage'
import NotFoundPage from './containers/NotFoundPage';
import ItemDetailPage from './containers/ItemDetailPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/items/:id" component={ItemDetailPage}/>
          <Route path="*" component={NotFoundPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
