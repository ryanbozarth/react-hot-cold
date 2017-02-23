import React, { Component } from 'react'

export default class GuessForm extends Component {
  constructor(props) {
    super(props);

    this.state = { guess: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ guess: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // TODO: compare guess, add guess to list
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Make a guess"
          className="form-control"
          value={this.state.guess}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}
