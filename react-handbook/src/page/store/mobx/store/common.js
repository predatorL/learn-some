import { observable, action, computed } from 'mobx';

class Common {
    @observable todos = [];
    
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    @action add(name) {
        this.todos.push(new Todo(name))
    };
}



export default new Common()