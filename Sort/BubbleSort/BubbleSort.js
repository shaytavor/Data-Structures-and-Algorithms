// bubbleSort - accepts an array of numbers.
// Sorts the array in ascending order.
function bubbleSort(a, compare) {
    // default compare function - comparing numnbers
    if(arguments.length < 2)
        compare = utils.compare;
    
    
    let swapped = true;
    for(let i = a.length - 1; i > 0 && swapped; i--) {
        swapped = false;
        for(let j = 0; j < i; j++) 
            if(compare(a[j], a[j+1]) > 0) {
                utils.swap(a, j, j + 1);
                swapped = true;
            }
    }
}

function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}