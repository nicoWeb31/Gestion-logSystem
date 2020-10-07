import {combineReducers} from 'redux';
import logReducer from './logsreducer'


export default combineReducers({
    log:logReducer
})