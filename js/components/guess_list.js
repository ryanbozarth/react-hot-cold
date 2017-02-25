import React from 'react'
import { connect } from 'react-redux'

function GuessList({guesses}) {

  return (
    <ul>
      {guesses.map((guess, i) => (
        <li key={i}>{guess}</li>
      ))}
    </ul>
  )
}

export default connect(
  state => ({
    guesses: state.guesses
  })
)(GuessList)
