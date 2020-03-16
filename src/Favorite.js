import React from 'react';


const Favorite = (props) => {
  return (
    <div>
      <div class="headshot"> <img src={props.player.img}/></div>
      <div class="stats-card">
        <h3>{props.player.name}</h3>
        <table>
          <tr>
            <td>PTS</td>
            <td>REB</td>
            <td>AST</td>
          </tr>
          <tr>
            <td>{props.player.pts}</td>
            <td>{props.player.reb}</td>
            <td>{props.player.ast}</td>
          </tr>
        </table>
        <div class="button" onClick={ () => props.removeFavorite(props.player) }>Remove</div>
      </div>
    </div>
  )
}


export default Favorite;
