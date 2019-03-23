// Insertion sort - accepts an array and a comparator function.
// Sorts the array in ascending order using insertion sort algorithm.
function insertionSort(a, compare) {
    if(arguments.length < 2)
        compare = utils.compare;

    for(let i = 1; i < a.length; i++) 
        for(let j = i; j > 0; j--)
            if(compare(a[j], a[j-1]) < 0)
                utils.swap(a, j, j - 1)
            else
                break;
}