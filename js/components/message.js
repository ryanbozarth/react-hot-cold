import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NUMBER_MATCHED, COLDER, HOTTER, initGame } from '../actions/'

class Message extends Component {
  constructor(props) {
    super(props)

    this.winCondition = this.winCondition.bind(this)
  }

  winCondition() {
    if (this.props.modalType === NUMBER_MATCHED) {
      return <button className="top btn btn-success" onClick={() => this.props.initGame()}>Reset Game</button>
    }
  }

  render() {
    if (this.props.modalType === null ) {
      return null;
    } else if (this.props.modalType === NUMBER_MATCHED) {
        return (
          <div className="alert alert-success">
            <p>You got it right!</p>
            {this.winCondition()}
          </div>
        )
    } else if (this.props.modalType === COLDER) {
      return (
        <div className="alert alert-info">
          <p>You're getting colder...</p>
        </div>
    )
  } else if (this.props.modalType === HOTTER) {
      return (
        <div className="alert alert-danger">
          <p>You're getting hotter...</p>
        </div>
    )
  }
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
