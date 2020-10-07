import {combineReducers} from 'redux';
import logReducer from './logsreducer';
import techReducer from './techReducer'


export default combineReducers({
    log:logReducer,
    tech:techReducer
})