import React, { Component } from 'react';

class Console extends Component {
  constructor() {
    super();
  }
  render () {
    console.log('this.props in console comp', this.props);
    return (
      <div>
        <p>Playstation</p>
        <p>Xbox</p>
        <p>Nintendo</p>
      </div>
    )
  }
}

export default Console;
