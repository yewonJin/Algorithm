var arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for(let i = 1; i < arr.length; i++) {
    for(let j = i; j > -1; j--) {
        if(arr[j] < arr[j-1]) {
           let temp = arr[j];
           arr[j] = arr[j-1];
           arr[j-1] = temp;
        }
        else{
            break
        }
    }
}

console.log(arr);
