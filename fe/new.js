const arr = [1, 2, 4, 3, 4, 5, 6, 7, 7, 7, 8, 6, 10];
let array = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      array.push(arr[i]);
    }
  }
}

console.log(array);
