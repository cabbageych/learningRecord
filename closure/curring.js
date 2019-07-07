function curring(x) {
    return function (y) {
        return function (z) {
            return function (w) {
                return x + y + z + w;
            }
        }
    }
}

let ans = curring(1)(2)(3)(4);
console.log(ans);