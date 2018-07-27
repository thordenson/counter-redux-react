import React from 'react';
// It just renders props!

const Counter = (props) => {
    return (
        <div>
            <button onClick={props.decrement}>-</button>
            {props.count}
            <button onClick={props.increment}>+</button>
        </div>
    );
};

export default Counter;