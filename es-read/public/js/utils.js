window.$ = str => document.querySelector(str)
window.$all = str => document.querySelectorAll(str)
window.__Utils = {}
// args: target, source | Array([[target, source], [target, source]])
__Utils.mountCode = (...args) => {
    if (args.length === 1 && Array.isArray(args[0])) {
        args.forEach(([target, source]) => {
            $(target).innerHTML = $(source).innerHTML
        })
    }
    if (args.length === 2) {
        $(args[0]).innerHTML = $(args[1]).innerHTML
    }
}
