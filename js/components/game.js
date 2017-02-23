import React, { Component } from 'react'
import {connect} from 'react-redux'
import GuessList from './guess_list'
import GuessForm from './guess_form'
import Message from './message'

export default class Game extends Component {
  constructor(props) {
    super(props);
    // bind goes in here if needed
  }

  // functions before render

  render() {
    return (
      <h1>Game Component</h1>
    );
  }
}
