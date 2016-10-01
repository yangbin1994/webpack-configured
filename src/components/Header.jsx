import React, {Component} from 'react';

class Header extends Component {
    componentDidMount() {
        $(this.refs.shell)
            .dropdown();
    }
    render() {
        return (
            <div className="ui dropdown" ref="shell">
                <input type="hidden" name="gender"/>
                <i className="dropdown icon"></i>
                <div className="default text">Gender</div>
                <div className="menu">
                    <div className="item" data-value="male">Male</div>
                    <div className="item" data-value="female">Female</div>
                </div>
            </div>
        );
    }
}

export default Header;