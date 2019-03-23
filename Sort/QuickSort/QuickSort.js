// quickSort - accepts an array of numbers.
// Sorts the array in ascending order.
function quickSort(a, compare, start, end) {
    if(arguments.length < 2)
        compare = utils.compare;
    if(arguments.length <= 2)   
        quickSort(a, compare, 0, a.length - 1);
    else if(start < end) {
        let curr = partition(a, compare, start, end);
        quickSort(a, compare, start, curr - 1);
        quickSort(a, compare, curr + 1, end);
    }
}

// partition the array around the pivot. 
// returns the pivot location
function partition(a, compare, start, end) {
    let p = start;
    let q = end;
    let pivot = a[start];
    
    while(p < q) {
        while(compare(a[q], pivot) > 0 && p < q)
            q--;
        while(compare(a[p], pivot) <= 0 && p < q)
            p++;
        utils.swap(a, p, q);
    }
    utils.swap(a, start, p);
    return p;
}