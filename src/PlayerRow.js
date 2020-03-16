import React from 'react';

const PlayerRow = (props) => {
  return (
    <tr>
      <td> <div class="button" onClick={() => props.addFavorite(props.player)}>Add to Favorties</div> </td>
      <td> {props.player.name}</td>
      <td> {parseFloat(props.player.pts.toFixed(1))}</td>
      <td> {parseFloat(props.player.reb.toFixed(1))}</td>
      <td> {parseFloat(props.player.ast.toFixed(1))}</td>
    </tr>
  )
}

export default PlayerRow;
