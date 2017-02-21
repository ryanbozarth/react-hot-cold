import chai from 'chai'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../js/actions'
import reducers from '../js/reducers'

const should = chai.should()
const mockStore = configureMockStore([thunk])


describe('actions', function() {
  it('should dispatch INIT_GAME', function() {
    const expectedActions = {
      type: actions.INIT_GAME
    }

    actions.initGame().type.should.equal(expectedActions.type)
  })
  it('should dispatch NUMBER_MATCHED if guess is correct', function() {
    const expectNumberMatched = [
      { type: actions.COMPARE_NUMBER, num: 15 },
      { type: actions.NUMBER_MATCHED }
    ]
    const store = mockStore({guesses: [1, 5, 10], randomNumber: 15})
    store.dispatch(actions.compareNumber(15))

    const storeActions = store.getActions()
    storeActions[0].type.should.equal(expectNumberMatched[0].type)
    storeActions[0].num.should.equal(expectNumberMatched[0].num)
    storeActions[1].type.should.equal(expectNumberMatched[1].type)
  })
  it('should dispatch COLD if guess is more than 10', function() {
    const expectedCold = {
      type: actions.COLD
    }

    const store = mockStore({guesses: [], randomNumber: 15})
    store.dispatch(actions.compareNumber(27))

    const storeActions = store.getActions()
    storeActions[0].num.should.equal(27)
    storeActions[0].type.should.equal(actions.COMPARE_NUMBER)
    storeActions[1].type.should.equal(actions.COLD)

  })
  it('should dispatch HOT if guess is less than 10', function() {
    const expectedCold = {
      type: actions.HOT
    }

    const store = mockStore({guesses: [], randomNumber: 15})
    store.dispatch(actions.compareNumber(17))

    const storeActions = store.getActions()
    storeActions[0].num.should.equal(17)
    storeActions[0].type.should.equal(actions.COMPARE_NUMBER)
    storeActions[1].type.should.equal(actions.HOT)
  })


});

describe('reducers', function() {
  let initialState
  before(function() {
    initialState = {
      guess: {
        randomNumber: 50,
        guesses: [],
        correctGuess: false,
        modalView: false
      }
    }
  })
  it('should handle INIT_GAME', function() {
    const result = reducers(initialState, actions.initGame()).guess
    result.randomNumber.should.equal(50)
    result.guesses.length.should.equal(0)
    result.correctGuess.should.be.false
    result.modalView.should.be.false
  })
  it('should handle COMPARE_NUMBER, NUMBER_MATCHED', function() {
    reducers(initialState, actions.compareNumber(50))
    // result.guesses.length.should.equal(1)
    // result.guesses[0].should.equal(50)
  })
})


// // Log the initial state
// console.log(store.getState())
//
// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
//
// // Dispatch some actions
// store.dispatch(initGame())
// store.dispatch(takeUserNumber(14))
// store.dispatch(compareNumber() // unclear how this works
//
// // Stop listening to state updates
// unsubscribe()
