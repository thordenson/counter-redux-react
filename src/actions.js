// Step 2: List out all the ways
// we could change state

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// const actions = {
//   INCREMENT: 'INCREMENT',
//   DECREMENT: 'DECREMENT'
// }

/*
  {
    type: 'INCREMENT'
  }
  {
    type: 'DECREMENT'
  }
*/

//Uses implicit return
// Note the parens around the return object!
const actionIncrement = () => ({
    type: INCREMENT
});

const actionDecrement = () => ({
    type: DECREMENT
});