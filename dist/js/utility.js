function padding(num, n) {
    return Array(n > num ? (n - ('' + num).length + 1) : 0).join(0) + num;
}

String.prototype.format = function () {
    a = this;
    for (k in arguments) {
        a = a.replace("{" + k + "}", arguments[k])
    }
    return a
}