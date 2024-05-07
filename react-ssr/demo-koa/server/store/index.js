import Store from '../../src/stores';
import * as Api from '../../src/api';
export default async (ctx) => {
    // 两种方式初始化 一种是在new store时传参，一种是调用实例的方法
    const store = new Store();
    let url = ctx.request.url;
    let store_info = {
        name: '',
        data: null
    };
    if(url.indexOf('list') !== -1) {
        let res_list = await Api.getList();
        store_info.name = 'list';
        store_info.data = res_list.data.data;
        store.store_list.setList(store_info.data);
    }
    if(url.indexOf('home') !== -1) {
        let res_info = await Api.getUserInfo();
        store_info.name = 'home';
        store_info.data = res_info.data;
        store.store_home.setUserInfo(store_info.data);
    }
    ctx.store_info = store_info;
    return store;
}
