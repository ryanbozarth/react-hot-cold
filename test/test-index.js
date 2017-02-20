import chai from 'chai'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../js/actions/index'
import _ from 'lodash'

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
  xit('should dispatch COLD if guess is more than 10', function() {

  })
  xit('should dispatch HOT if guess is less than 10', function() {

  })


});

xdescribe('reducers', function() {
  //https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md#reducers
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
