import React from 'react';

const PlayerRow = () => {
  return (
    <div>
      <img src={this.props.player.img}></img>
      <div> Name: {this.props.player.name}</div>
      <div> pts: {this.props.player.pts}</div>
      <div> reb: {this.props.player.reb}</div>
      <div> ast: {this.props.player.ast}</div>
    </div>
  )
}


export default PlayerRow;
