import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';

class Page2 extends Component {
    render() {
        return (
            <QueueAnim>
                <div key="anim-1">
                    我是内容2
                </div>
            </QueueAnim>
        );
    }
}

export default Page2;