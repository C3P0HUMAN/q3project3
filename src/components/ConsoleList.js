import React, { Component } from 'react';
import * as consolesActions from '../actions/Console'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {
  Link
}
from 'react-router-dom';

class ConsoleList extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    this.props.actions.getConsoleList();
  }

  render () {
    console.log('can you hear me?', this.props)
    let consoles = this.props[this.props.match.params.company].map(aconsole => {
      console.log('a console', aconsole);
      return (
        <Link to={'/games/' + aconsole.console_name} className="collection-item">{aconsole.console_name}</Link>
      )
    })

    return (
      <div className="collection with-header">
        <li className="collection-header"><h4>Console List</h4></li>
          {consoles}
        </div>
    )
  }
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(consolesActions, dispatch)
  }
}

function mapStateToProps(state, props) {
  return {
    playstation: state.consoles.filter(item => item.console_company === 'Sony'),
    microsoft: state.consoles.filter(item => item.console_company === 'Microsoft'),
    nintendo: state.consoles.filter(item => item.console_company === 'Nintendo')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsoleList);
