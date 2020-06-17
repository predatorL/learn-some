const logHttp = axios.create({
    baseURL: '/log'
})

const apiHttp = axios.create({
    baseURL: '/api'
})

export {
    logHttp,
    apiHttp
};
