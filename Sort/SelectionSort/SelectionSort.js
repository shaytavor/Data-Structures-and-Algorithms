// selectionSort - accepts an array of elements and a compare function.
// Sorts the array in ascending order.
function selectionSort(a, compare) {
    // default compare function - comparing numnbers
    if(arguments.length < 2)
        compare = function(v1, v2) {
            if(v1 > v2) 
                return 1;
            else if(v1 < v2)
                return -1;
            else
                return 0;
        };
    
    for(let i = a.length - 1; i > 0; i--) {
        let maxInd = 0;
        for(let j = 0; j <= i; j++) 
            if(compare(a[j], a[maxInd]) > 0) 
                maxInd = j;
        swap(a, maxInd, i);
    }
}

function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}