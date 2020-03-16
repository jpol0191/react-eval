import React from 'react';
import PlayerRow from './PlayerRow'
const jsonUrl = 'http://my-json-server.typicode.com/nortenzio/leagueplayerstats/players';


const PlayerList = () => {
  const componentDidMount = () => {
    fetch(jsonUrl)
      .then(res => res.json())
      .then(json => this.setState({ players: json }))
  }
  const sortPlayers = () =>{
    return this.PaymentResponse.players.sort((a,b) => { return b.pts - a.pts })
  }
  return (
    <div>
      <table>
        {sortPlayers().map(player => (
          <td>
            <PlayerRow player={player} />
          </td>
        ))}
      </table>
    </div>
  )
}


export default PlayerList;
