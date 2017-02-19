import * as actions from './actions/index';

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(initGame())
store.dispatch(takeUserNumber(14))
store.dispatch(compareNumber() // unclear how this works

// Stop listening to state updates
unsubscribe()
