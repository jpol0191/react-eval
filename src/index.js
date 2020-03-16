import React, { Component } from 'react';
import { render } from 'react-dom';
import PlayerList from './PlayerList';
import FavoriteList from './FavoriteList'
import './style.css';

class App extends Component {
  constructor(){
    super();
    this.state = { favorites: [] };

    this.addFavorite = this.addFavorite.bind(this); 
    this.removeFavorite = this.removeFavorite.bind(this);
  } 

  addFavorite(player){
    this.setState( (state) => {
      state.favorites[player.pid] = player;
      return { favorites: state.favorites };
    })
  }
  removeFavorite(player){
    this.setState( (state) => {
      delete state.favorites[player.pid];
      return { favorites: state.favorites}
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Favorites:</h1>
        <FavoriteList favorites={this.state.favorites} removeFavorite={this.removeFavorite}/>
        <h1>Players:</h1>
        <PlayerList addFavorite={this.addFavorite}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
