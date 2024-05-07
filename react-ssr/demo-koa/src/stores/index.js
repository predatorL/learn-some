import store_home from './home';
import store_list from './list';

export default class Store_root {
    constructor() {
        let _initData = {};
        // 判断当前环境
        if(typeof window !== 'undefined') {
            _initData = window._page_defaultData;
        }
        this.store_home = new store_home(this);
        this.store_list = new store_list(this);
        // 初始化数据
        if(_initData.name) {
            this[`store_${_initData.name}`].init(_initData.data);
        }
    }
}

