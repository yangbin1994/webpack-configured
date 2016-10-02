import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Home from './containers/Home';
// import {Provider, connect} from 'react-redux';
// import Store from './redux';

ReactDom.render((
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
        </Route>
    </Router>
), document.getElementById('root'))