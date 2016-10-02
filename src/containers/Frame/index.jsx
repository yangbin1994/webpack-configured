import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import SiderMenu from 'components/SiderMenu';
import QueueAnim from 'rc-queue-anim';
import BreadMenu from 'components/BreadMenu';
import Copyright from 'components/Copyright';

import 'antd/dist/antd.min.css';
import './style.css';

export default class Home extends Component {
    render() {
        return (
            <div className="ant-layout-aside">
                <QueueAnim>
                    <aside className="ant-layout-sider" key="anim-1">
                        <div className="ant-layout-logo"></div>
                        <SiderMenu></SiderMenu>
                    </aside>
                    <div className="ant-layout-main" key="anim-2">
                        <QueueAnim>
                            <div className="ant-layout-header" key="anim-1">
                                我是header
                            </div>
                            <div className="ant-layout-breadcrumb" key="anim-2">
                                <BreadMenu></BreadMenu>
                            </div>
                            <div className="ant-layout-container" key="anim-3">
                                <div className="ant-layout-content">
                                    {this.props.children}
                                </div>
                            </div>
                            <div className="ant-layout-footer" key="anim-4">
                                <Copyright></Copyright>
                            </div>
                        </QueueAnim>
                    </div>
                </QueueAnim>
            </div>
        );
    }
}