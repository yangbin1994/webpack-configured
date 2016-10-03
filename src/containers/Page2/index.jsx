import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import QueueAnim from 'rc-queue-anim';
import { Button, Icon } from 'antd';
import {addButton} from '../../redux/actions/Action2'
import {connect} from 'react-redux'

class Page2 extends Component {
    constructor(props) {
        super(props)
        this.onAddButtonClick = this.onAddButtonClick.bind(this)
    }
    onAddButtonClick(e) {
        this.props.addButton()
    }
    render() {
        return (
            <QueueAnim>
                <div key="anim-1">
                    <Button type="primary" onClick={this.onAddButtonClick}>增加按钮</Button>
                    <Icon type="check" />
                    {this.props.buttons.map((item, index) => (
                        <Icon key={index} type="check" />
                    )) }
                </div>
            </QueueAnim>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        ...state.Reducer2
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addButton: bindActionCreators(addButton, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page2)