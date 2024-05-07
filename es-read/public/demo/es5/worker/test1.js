// console.log(this)
this.onmessage = (e) => {
    const {data} = e
    console.log('worker onmessage', data)
    data.req_time = new Date().getTime()
    setTimeout(_ => {
        data.res_time = new Date().getTime()
        fn_post(data)
    }, fn_randomTime())
}
// 随机时间
const fn_randomTime = () => {
    return Math.random().toFixed(1)*10*1000
}
const fn_post = (data) => {
    console.log('worker start respones')
    this.postMessage(data)
}
