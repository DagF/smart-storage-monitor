import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import monitorReducer from './monitor/MonitorReducer'

// This file contains all the projects reducers creating an overview of the possible
// store domains
/**
 * eg:
 * {
 *  routing: {},
 *  disposition: {},
 *  login: {},
 *  users: {},
 * }
 *
 * */

const rootReducer = combineReducers({
    routing: routerReducer,
    monitor: monitorReducer
});

export default rootReducer