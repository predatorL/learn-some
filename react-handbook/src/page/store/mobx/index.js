import React from 'react';
import TodoListView from './todolist';
import './style.less';
import {Row, Col, Tabs} from 'antd';
import store from './store';
import { Provider } from 'mobx-react';

const { TabPane } = Tabs;

export default class extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            page: 'todolist'
        }
    }

    render() {
        return (
            <Provider {...store}>
                <div className="main-container mobx">
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="Tab 1" key="1">
                            <TodoListView />
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                    
                </div>
            </Provider>
        )
    }
}
