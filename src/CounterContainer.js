import { connect } from 'redux-react';
import Counter from '../components/Counter';

const mapStatetoProps = (state) => {
    return {
        count: state.count
    }
;}

const componentConnector = connect(mapeStateToProps);
const connectCounter = conmponentConnector(Counter);

export default connectedCounter;

