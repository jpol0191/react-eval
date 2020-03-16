import React from 'react';
import Favorite from './Favorite';

const FavoriteList = () => {
  const handleRender = () =>{
    if ( this.props.favorites.length == 0 ){
      return (<h2>No Favorites Yet</h2>)
    }else{
      return (
        this.props.favorites.map( player => {
          <Favorite player={player}/>
        })
      )
    }
  }
  return (
    <div>
      {handleRender()}
    </div>
  )
}


export default FavoriteList;
