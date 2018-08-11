import { combineReducers } from 'redux';
import sampleState from './Sample/SampleState';

const rootReducer = combineReducers({
    sampleState: sampleState
});

export default rootReducer;