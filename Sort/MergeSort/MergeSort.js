// mergeSort - accepts an array of numbers.
// Sorts the array in ascending order.
function mergeSort(a, compare, start, end) {
    if(arguments.length < 2)
        compare = utils.compare;
    if(arguments.length <= 2)   
        mergeSort(a, compare, 0, a.length - 1);
    else if(start < end) {
        let mid = Math.floor((start + end) / 2);
        mergeSort(a, compare, start, mid);
        mergeSort(a, compare, mid + 1, end);
        merge(a, start, end, compare);
    }
}

// merges two sorted halfs of a to a sorted array 
function merge(a, start, end, compare) {
    let mid = Math.floor((start + end) / 2);
    let left = Array(mid - start + 1);
    let right = Array(end - mid);
    
    for(let i = start; i <= mid; i++)
        left[i - start] = a[i];
    for(let i = mid + 1; i <= end; i++)
        right[i - mid - 1] = a[i];
    
    let i, j, k;
    i = j = 0;
    k = start;
    while(i < left.length && j < right.length) {
        if(compare(left[i], right[j]) < 0)
            a[k++] = left[i++];
        else
            a[k++] = right[j++];
    }
    
    let temp;
    if(i < left.length)
        temp = left;
    else {
        temp = right;
        i = j;
    }
    for(; i < temp.length; i++)
        a[k++] = temp[i];
}