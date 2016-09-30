import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                {this.props.name || 'I am header Component'} 
            </div>
        );
    }
}

export default Header;