import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compareNumber, newGuess, initGame } from '../actions/index'

export class GuessForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGuess: '',
      guessCount: 0
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    var number = parseInt(event.target.value)
    if(number > 100 || number < 0) {
      return console.error("Please choose a number between 0 and 100")
    }
    this.setState({currentGuess: number})
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.compareNumber(this.state.currentGuess)
    this.state.currentGuess = ''
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Make a guess"
          className="form-control"
          value={this.state.currentGuess}
          onChange={this.onInputChange}
          type="number"
          min="0"
          max="100"
         />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapPropsToState(state) {
  return { guessLength: state.guesses.length, modalType: state.modalType }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ compareNumber, newGuess, initGame }, dispatch)
}

export default connect(mapPropsToState, mapDispatchToProps)(GuessForm)
