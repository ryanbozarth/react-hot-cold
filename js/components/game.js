import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import GuessForm from './guess_form'
import GuessList from './guess_list'
import Message from './message'
import { initGame } from '../actions/index'

export class Game extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.initGame()
  }

  render() {
    return (
      <div>
      <h1>Game Component</h1>
      <GuessForm /> <hr />
      <GuessList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initGame }, dispatch)
}

export default connect(null, mapDispatchToProps)(Game)
