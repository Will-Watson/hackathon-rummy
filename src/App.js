import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Route exact path='/' component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
