import React, { Component } from 'react';
import Game from './Game';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  Link
} from 'react-router-dom';
import * as gamesActions from '../actions/Games';
class GameList extends Component {
  componentDidMount(){
    this.props.actions.getGameList();
  }
  render () {
    console.log('this.props in games comp', this.props)
    let style = {
      "height": "100px"
    };
    let games = this.props.games
      .filter(game => game.console_name === this.props.match.params.console)
      .map(game => {
      return (<li key={game.game_id}> {game.game_title}
         <br/>
         <Link to={"/reviews/"+`${game.game_id}`}>
           <img src={game.game_image} height="200px"/>
           </Link>
           <br/> Summary: {game.game_summary} </li>)

    })
    return (
      <div>
        <ul>
        {games}
        </ul>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(gamesActions, dispatch)
  }
}

function mapStateToProps(state, props) {
  return {
    games: state.games,
    consoles: state.consoles
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GameList);
