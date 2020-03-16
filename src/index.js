import React, { Component } from 'react';
import { render } from 'react-dom';
import PlayerList from './PlayerList';
import FavoriteList from './FavoriteList'
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Favorites:</h1>
        <FavoriteList />
        <h1>Players:</h1>
        <PlayerList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
