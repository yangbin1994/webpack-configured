import React, {Component, PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { Link, IndexLink } from 'react-router'
import { Menu, Icon } from 'antd'
import {connect} from 'react-redux'
import {fetchSiderMenuData} from '../../redux/actions/Action1'

const SubMenu = Menu.SubMenu;

class SiderMenu extends Component {
    componentDidMount() {
        this.props.fetchSiderMenuData('siderData');
    }
    render() {
        return (
            <div>
                <Menu mode="inline" theme="dark"
                    defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                    <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
                        <Menu.Item key="1"><IndexLink to="/">page1</IndexLink></Menu.Item>
                        <Menu.Item key="2"><Link to="/page2">page2</Link></Menu.Item>
                        {this.props.siderMenuData.map((item, index) =>
                            (<Menu.Item key={index}>{index+11}</Menu.Item>)
                        ) }
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
//将state.counter绑定到props的counter
function mapStateToProps(state) {
    return {
        ...state.Reducer1
    }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return {
        fetchSiderMenuData: bindActionCreators(fetchSiderMenuData, dispatch)
    }
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(SiderMenu)
