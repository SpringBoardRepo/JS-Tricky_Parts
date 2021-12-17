function curriedAdd(total) {
    if (total === undefined) return 0;
    return function addnext(num) {
        if (num === undefined) return total;
        total += num;
        return addnext;
    };
}

module.exports = { curriedAdd };
