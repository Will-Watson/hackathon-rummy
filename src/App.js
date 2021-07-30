import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Game from './components/Game';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/hackathon-rummy-game' component={Game} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
