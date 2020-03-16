import React from 'react';

const PlayerRow = () => {
  return (
    <tr>
      <td> <div class="button" >Add to Favorties</div> </td>
      <td> {this.props.player.name}</td>
      <td> {parseFloat(this.props.player.pts.toFixed(1))}</td>
      <td> {parseFloat(this.props.player.reb.toFixed(1))}</td>
      <td> {parseFloat(this.props.player.ast.toFixed(1))}</td>
    </tr>
  )
}


export default PlayerRow;
