import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux'
import {IndexRoute, Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux'

import Application from './application/Application'
import DevTools from './devtools/DevTools'
import Monitor from './monitor/Monitor'

import rootReducer from './Reducers'

export const HOST = 'http://gurutrack.idi.ntnu.no:9000/api/';
/**
 * This component manages the web-page routing
 */
const middleware = routerMiddleware(browserHistory);
// setup the apps store
const store = createStore(
    rootReducer,
    DevTools.instrument(),
    applyMiddleware(middleware)
);

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={Application}>
                        <IndexRoute component={Monitor}/>
                    </Route>
                </Router>
            </Provider>
        );
    }
}

export default App;
