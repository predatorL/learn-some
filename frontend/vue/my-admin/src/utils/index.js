import axios from 'axios'

// 先这么办吧
export const request = axios.create({
    baseURL: '/api/'
})

// TODO: 可以考虑添加通过配置info错误的提示
export const createReq = (urlSet, baseUrl) => {
    const requests = {}
    const req_loop = ([name, options]) => {
        let method = 'get'
        let url = ''
        let fn = null
        if (typeof options === 'string') {
            url = baseUrl + options
        } else {
            url = options.url
            method = options.method
        }
        if (method === 'get') {
            fn = params => {
                return request.get(url, {
                    params
                })
            }
        } else {
            fn = params => {
                return request[method](url, params)
            }
        }
        requests[name] = fn
    }
    Object.entries(urlSet).forEach(req_loop)
    return requests
}
