
import { observable, action, computed, runInAction } from 'mobx';

export default class Store {
    @observable userInfo = {};
    @action setUserInfo(data) {
        this.userInfo = data;
    }
    init(data) {
        this.setUserInfo(data);
    }
}
