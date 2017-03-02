import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import GuessForm from './guess_form'
import GuessList from './guess_list'
import Message from './message'
import { getFewestNumber } from '../actions/index'
import axios from 'axios'

export class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highScore: null
    }
  }

  componentDidMount() {
    this.props.getFewestNumber()
  }

  render() {
    return (
      <div className="container">
      <h3>Hot / Cold App <small>Score to beat: {this.props.fewestGuesses ? this.props.fewestGuesses : ''}</small></h3>
      <GuessForm /> <hr />
      <GuessList />
      <Message />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fewestGuesses: state.fewestGuesses
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFewestNumber }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
