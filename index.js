function receivesAFunction (callback) {
    callback ()
}
function returnsANamedFunction () {
    return function jeffrey () {
        console.log('I\'m Jeffrey')
    }
}
function returnsAnAnonymousFunction () {
    return function () {
        console.log('Whatever, Jeffrey')
    }
}