import React from 'react';


const Favorite = () => {
  return (
    <div>
      <div class="headshot"> <img src={this.props.player.img }/></div>
      <div class="stats-card">
        <h3>{this.props.player.name}</h3>
        <table>
          <tr>
            <td>PTS</td>
            <td>REB</td>
            <td>AST</td>
          </tr>
          <tr>
            <td>{this.props.player.pts}</td>
            <td>{this.props.player.reb}</td>
            <td>{this.props.player.ast}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}


export default Favorite;
