import React, { Component } from 'react';

class Game extends Component {
  constructor() {
    super();
  }
  render () {
      console.log(this.props)
    return (

    <li>
      <p>{this.props.games.game_title}</p>
      <p>{this.props.games.game_image}</p>
      <p>{this.props.games.game_summary}</p>
      <p>{this.props.games.console_id}</p>
    </li>
    )
  }
}

export default Game;
