import React from 'react';
import Favorite from './Favorite';

const FavoriteList = (props) => {
  const handleRender = () => {
    if ( props.favorites.length === 0 ){
      return (<h2>No Favorites Yet</h2>)
    }else{
      const players = props.favorites.map( player => {
        return <Favorite player={player} removeFavorite={props.removeFavorite}/>
      })
      return players;
    }
  }
  return (
    <div>
      {handleRender()}
    </div>
  )
}


export default FavoriteList;
