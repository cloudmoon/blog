var e = sel => document.querySelector(sel)

var log = console.log.bind(console)

var bindEvent = function (sel, event, callback) {
    let element = document.querySelector(sel)
    element.addEventListener(event, function () {
        callback()
    })
}

var randomB = function (start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start)
}
