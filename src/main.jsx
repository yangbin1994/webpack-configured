import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
// import {Provider, connect} from 'react-redux';

// import Store from './redux';
import Home from './containers/Home';
import CourierList from './containers/CourierList';

ReactDom.render((
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <Route path="courierList" component={CourierList} />
        </Route>
    </Router>
), document.getElementById('root'))