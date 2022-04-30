let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const num = 2;
newArr = [];
index = 0;
let pages = Math.floor(arr.length / num);
let rest = arr.length % num;
while (index < pages) {
  newArr[index] = arr.slice(index * num, index * num + num);
  index++;
}
newArr = [...newArr, arr.slice(arr.length - rest, arr.length)];
console.log(arr.slice(0, 2));
console.log(arr.slice(arr.length - rest, arr.length));
console.log(newArr.reduce((prev, curr) => prev + curr.length, 0));
