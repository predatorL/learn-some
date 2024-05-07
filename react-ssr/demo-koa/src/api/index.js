import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:3041/'
})

instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
    }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
    });

export function getUserInfo() {
    return instance.get('/api/userinfo')
}

export function getList() {
    return instance.get('/api/list')
}
