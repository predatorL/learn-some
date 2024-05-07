import React from 'react';
import { observer, inject } from 'mobx-react';
import { Checkbox, Form, Input, Row, Col, Button } from 'antd';

const TodoView = observer(({todo}) => (
    <li>
        <Checkbox checked={todo.finished} onChange={() => todo.finished = !todo.finished}>{todo.title} </Checkbox>
    </li>
))

@inject('store_todolist')
@observer
class TodoListView extends React.Component {
    add = () => {
        this.props.store_todolist.add(this.refs.addVal.state.value)
    }
    render() {
        const { store_todolist } = this.props;
        return (
            <Form style={{
                width: '600px',
                margin: '20px auto'
            }}>
                <Form.Item label="todolist">
                    {
                        store_todolist.todos.map(todo =>(
                            <TodoView todo={todo} key={todo.id} />
                        ))
                    }
                </Form.Item>
                <Form.Item >
                    <span className="ant-">Tasks left: {store_todolist.unfinishedTodoCount}</span>
                </Form.Item>
                <Form.Item>
                    <Row>
                        <Col span={12}>
                            <Input type="text" ref="addVal"/>
                        </Col>
                        <Col offset={2} span={6}>
                            <Button type="primary" onClick={this.add}>add</Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        )
    }
}

export default TodoListView;
