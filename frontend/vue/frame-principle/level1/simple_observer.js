/*
原理： ES5中新添加了一个方法：Object.defineProperty，通过这个方法，可以自定义getter和setter函数，从而在获取对象属性和设置对象属性的时候能够执行自定义的回调函数。
对象往往是一个深层次的结构： 递归算法，如果对象的属性仍然是一个对象的话，那么继续new一个Observer，直到到达最底层的属性位置
*/

function Observer(data) {
    this.data = data
    this.walk(data)
}

let p = Observer.prototype

p.walk = function(obj) {
    let val
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            val = obj[key]
            if (typeof val === 'object') {
                // 相当于给上一层的对象复制，递归
                new Observer(val)
            }
            this.convert(key, val)
        }
    }
}

p.convert = function(key, val) {
    Object.defineProperty(this.data, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log(`你访问了${key}`)
            return val
        },
        set(newVal) {
            console.log(`你设置了${key}`)
            console.log(`新的${key}=${newVal}`)
            if (newVal === val) {
                return
            }
            val = newVal
        }
    })
}
// Maximum call stack size exceeded, 为啥用class写会爆栈
// class Observer {
//     constructor(data) {
//         this.data = data
//         this.walk(data)
//     }
//     walk(object) {
//         let val
//         for (const key in object) {
//             if (object.hasOwnProperty(key)) {
//                 val = object[key];
//                 new Observer(val)
//             }
//             this.convert(key, val)
//         }
//     }
//     convert(key, val) {
//         Object.defineProperty(this.data, key, {
//             enumerable: true,
//             configurable: true,
//             get() {
//                 console.log(`你访问了${key}`)
//                 return val
//             },
//             set(newVal) {
//                 console.log(`你设置了${key}, 新值为${newVal}`)
//                 val = newVal
//             }
//         })

//     }
// }

module.exports = Observer
