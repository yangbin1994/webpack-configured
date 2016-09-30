import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Body from '../components/Body';
import Header from '../components/Header';


class Home extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <button class="ui button">Follow</button>
                <ul><Link to="/courierList">asdfasdf</Link></ul>
                <div>{this.props.children}`</div>
                <Header name="my is Header"/>
                <Body/>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;