import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import SiderMenu from 'components/SiderMenu';
import Copyright from 'components/Copyright';
import BreadMenu from 'components/BreadMenu';
import 'antd/dist/antd.min.css';
import './style.css';

export default class Home extends Component {
    render() {
        return (
            <div className="ant-layout-aside">
                <aside className="ant-layout-sider">
                    <div className="ant-layout-logo"></div>
                    <SiderMenu></SiderMenu>
                </aside>
                <div className="ant-layout-main">
                    <div className="ant-layout-header"></div>
                    <div className="ant-layout-breadcrumb">
                        <BreadMenu></BreadMenu>
                    </div>
                    <div className="ant-layout-container">
                        <div className="ant-layout-content">
                            <div style={{ height: 690 }}>
                                内容区域
                            </div>
                        </div>
                    </div>
                    <div className="ant-layout-footer">
                        <Copyright></Copyright>
                    </div>
                </div>
            </div>
        );
    }
}