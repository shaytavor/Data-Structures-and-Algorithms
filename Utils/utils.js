let utils = function() {
    let compare = (v1, v2) => v1 - v2;

    let swap = function(a, i, j) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }

    return {compare, swap};
}();