// const randomArray = [16, 2, 4, 19, 12, 3, 14, 20];
const randomArray = [16, 2, 4];
const sortedArray = [];

function mergeSort(array) {
    if (array.length < 2) {
        console.log(sortedArray);
        return sortedArray.push(array);
    }
    else {
        const half = Math.ceil(array.length / 2);
        const firstHalf = array.slice(0, half);
        const secondHalf = array.slice(half);
        mergeSort(firstHalf);
        mergeSort(secondHalf);
    }
    console.log(sortedArray)
}
mergeSort(randomArray);