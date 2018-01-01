var e = sel => document.querySelector(sel)

var log = console.log.bind(console)

var bindEvent = function(event, callback) {
    document.addEventListener(event, callback)
}

var removeEvent = function (event, callback) {
    document.removeEventListener(event, callback)
}