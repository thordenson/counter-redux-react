// Step 2: List out all the ways
// we could change state

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

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
export const actionIncrement = () => ({
    type: INCREMENT
});

export const actionDecrement = () => ({
    type: DECREMENT
});