let utils = function() {
    let compare = (v1, v2) => v1 - v2;

    let swap = function(a, i, j) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    };

    let generateRandomArray = function(size) {
        let res = [];
        for(let i = 0; i < size; i++)
            res.push(parseInt(Math.random() * 100));
        return res;
    };
    return {compare, swap, generateRandomArray};
}();