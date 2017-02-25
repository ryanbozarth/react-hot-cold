import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NUMBER_MATCHED, initGame } from '../actions/'

class Message extends Component {
  constructor(props) {
    super(props)

    this.winCondition = this.winCondition.bind(this)
  }

  winCondition() {
    if (this.props.modalType === NUMBER_MATCHED) {
      return <button onClick={() => this.props.initGame()}>Reset Game</button>

    }
  }

  render() {
    return (
      <div className="message">
        <p>You are {this.props.modalType}</p>
        {this.winCondition()}
      </div>
    )
  }
}

function mapPropsToState(state) {
  return {
    guesses: state.guesses,
    modalView: state.modalView,
    modalType: state.modalType
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initGame }, dispatch)
}

export default connect(mapPropsToState, mapDispatchToProps)(Message)
