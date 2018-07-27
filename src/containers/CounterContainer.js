import { connect } from 'redux-react';
import Counter from '../components/Counter';

import {
    actionIncremnt,
    actionDecrement
} from '../actions';

const mapStatetoProps = (state) => {
    return {
        count: state.count
    }
;}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch({actionIncrement})
        },
        decrement: () => {
            dispatch({actionDecrement})
        }
    }
}

const componentConnector = connect(mapeStateToProps, mapDispatchToProps);
const connectCounter = conmponentConnector(Counter);

export default connectedCounter;

