import React, { Component } from 'react';
import PlayerRow from './PlayerRow'
const jsonUrl = 'http://my-json-server.typicode.com/nortenzio/leagueplayerstats/players';


class PlayerList extends Component  {
  constructor(){
    super();
    this.state.players = [];
  }
  componentDidMount() {
    fetch(jsonUrl)
      .then(res => res.json())
      .then(json => this.setState({ players: json }))
  }

  sortPlayers() {
    return this.props.players.sort((a,b) => { return b.pts - a.pts })
  }

  render(){
    return (
      <div>
        <table>
          <tr>
            <th> </th>
            <th>Name</th>
            <th>PTS</th>
            <th>AST</th>
          </tr>
          {sortPlayers().map(player => (
            <PlayerRow player={player} />
          ))}
        </table>
      </div>
    )
  }
}


export default PlayerList;
