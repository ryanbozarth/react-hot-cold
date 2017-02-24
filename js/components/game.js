import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import GuessList from './guess_list'
import GuessForm from './guess_form'
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
      <GuessForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initGame }, dispatch)
}

export default connect(null, mapDispatchToProps)(Game)
