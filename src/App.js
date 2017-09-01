import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import CompaniesList from './components/CompaniesList';
import ConsoleList from './components/ConsoleList';
import Game from './components/Game';
import GameList from './components/GameList';
import Reviews from './components/reviews';



// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';


import TodoInput from './components/TodoInput'
import Home from './components/HomePage/Home'

export class App extends Component {

  mySubmit(values) {
    console.log('the vals', values);
    console.log('the props', this);
    this.props.actions.addToList(values.title)
  }

  render() {
    return (

        <Router>
         <div>

           <Route exact path="/" component={Home}/>
           <Route exact path="/consoles/:company" component={ConsoleList}/>
           <Route exact path="/games/:console" component={GameList}/>
           <Route exact path="/game" component={Game}/>
           <Route exact path="/reviews/:game" component={Reviews}/>
         </div>
        </Router>

    );
  }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(todoActions, dispatch)
//     }
// }
export default App;
