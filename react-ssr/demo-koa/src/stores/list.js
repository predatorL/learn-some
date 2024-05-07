
import { observable, action, computed, runInAction } from 'mobx';

export default class Store {
    @observable list = [];
    @action setList(data) {
        this.list = data;
    }
    init(data) {
        this.setList(data);
    }
}
