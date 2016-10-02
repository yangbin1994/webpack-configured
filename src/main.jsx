import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import Frame from './containers/Frame';
import Page1 from './containers/Page1';
import Page2 from './containers/Page2';

// import {Provider, connect} from 'react-redux';
// import Store from './redux';

ReactDom.render((
    <Router history={browserHistory}>
        <Route path="/" component={Frame}>
            <IndexRoute component={Page1}/>
            <Route path="page2" component={Page2}/>
        </Route>
    </Router>
), document.getElementById('root'))