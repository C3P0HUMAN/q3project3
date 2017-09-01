import React, { Component } from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Link
} from 'react-router-dom';
export class Home extends Component {

  render () {


      return (
        <div className="container">
  <div className="holder">
   <div className="row title_row valign-wrapper">
      <div className="col s12">
         <div className="title">Companies</div>
      </div>
   </div>
   <div className="row button_row">
      <Link to="/consoles/playstation"> <div className="col s4"><a  className="waves-effect waves-light btn myBtn">PlayStation</a></div> </Link>
    <Link to="/consoles/microsoft"> <div className="col s4"><a  className="waves-effect waves-light btn myBtn">Xbox</a></div> </Link>
    <Link to="/consoles/nintendo"> <div className="col s4"><a  className="waves-effect waves-light btn myBtn">Nintendo</a></div> </Link>
   </div>
    </div>
</div>

      )
    }
  }

  // <Link to="/consoles">PlayStation</Link>
  // <Link to="/consoles">Xbox</Link>
  // <Link to="/consoles">Nintendo</Link>
function mapStateToProps(state, props) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        // actions: bindActionCreators(todoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
