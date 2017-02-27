import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import GuessForm from './guess_form'
import GuessList from './guess_list'
import Message from './message'
import { initGame } from '../actions/index'
import axios from 'axios'

export class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highScore: null
    }
  }

  componentWillMount() {
    this.props.initGame()
    axios.get('http://localhost:8080/fewest-guesses')
      .then(res => {
        this.setState({highScore: res.data.fewestGuesses})
      })
  }

  render() {
    return (
      <div className="container">
      <h3>I'm thinking of a number... <small>{this.state.highScore ? this.state.highScore : ''}</small></h3>
      <GuessForm /> <hr />
      <GuessList />
      <Message />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initGame }, dispatch)
}

export default connect(null, mapDispatchToProps)(Game)

// TODO: send a post request after you receive a number matched actions
// refactor the get so that it happens on initGame + on number matched
