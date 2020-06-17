const EventEmitter = require('events')
const emt1 = new EventEmitter()
// 一个事件发射器可以添加多个监听器(listen), 这些listen会按队列
emt1.on('event1', data => {
    console.log('step1, +1:', data)
    data.val2 = data.val1 + 1
})
emt1.on('event1', data => {
    console.log('step2, +4:', data)
    data.val3 = data.val2 + 4
})

module.exports = {
    methods: {
        doAction1() {
            const { val1 } = this.form1
            emt1.emit('event1', this.form1)
        },
        onSubmit(index) {
            this['doAction' + index]()
        }
    },
    mounted() {},
    data() {
        return {
            form1: {
                val1: '',
                val2: '',
                val3: ''
            }
        }
    }
}
