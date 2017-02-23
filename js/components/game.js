import React, { Component } from 'react'
import {connect} from 'react-redux'
import GuessList from './guess_list'
import GuessForm from './guess_form'
import Message from './message'
import * as actions from '../actions/index'

export default class Game extends Component {
  constructor(props) {
    super(props);
    // bind goes in here if needed
  }

  // functions before render

  render() {
    return (
      <div>
      <h1>Game Component</h1>
      {/* <GuessForm guesses={this.props.guesses} /> */}
      </div>
    );
  }
}
