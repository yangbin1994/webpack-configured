import React, {Component, PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

export default class SiderMenu extends Component {
    render() {
        return (
            <div>
                <Menu mode="inline" theme="dark"
                    defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                    <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
                        <Menu.Item key="1"><IndexLink to="/">page1</IndexLink></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
                        <Menu.Item key="2"><Link to="/page2">page2</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}