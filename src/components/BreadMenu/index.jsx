import React, {Component} from 'react';
import {Breadcrumb} from 'antd';

class BreadMenu extends Component {
    render() {
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>应用列表</Breadcrumb.Item>
                    <Breadcrumb.Item>某asdf应用</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}

export default BreadMenu;