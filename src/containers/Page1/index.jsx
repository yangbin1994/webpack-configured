import React, {Component} from 'react';
import { DatePicker } from 'antd';
import QueueAnim from 'rc-queue-anim';

class Page1 extends Component {
    onChange(date, dateString) {
        console.log(date, dateString);
    }

    render() {
        return (
            <QueueAnim>
                <div key="anim-1">
                    我是内容1
                    <DatePicker onChange={this.onChange} />
                </div>
            </QueueAnim>

        );
    }
}

export default Page1;