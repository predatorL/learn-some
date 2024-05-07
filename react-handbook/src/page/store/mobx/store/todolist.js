import { observable, action, computed, autorun } from 'mobx';
import {message} from 'antd';
class Todo {
    constructor(name) {
        this.title = name;

        autorun(() => {
            if(this.finished) {
                message.destroy();
                message.success('你完成了意向任务', 1);
            }
        })
    }
    id = new Date().getTime();
    @observable title = '';
    @observable finished = false;
}

class TodoList {
    @observable todos = [];
    
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    @action add(name) {
        this.todos.push(new Todo(name))
    };
}



export default new TodoList()