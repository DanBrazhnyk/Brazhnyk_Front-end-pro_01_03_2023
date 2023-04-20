const filterPrefix = (arr)=>
{
    const firstWord = arr[0];
    let commonPrefix = firstWord.split('').reduce((prefix, char, i) => {
      if (!arr.every(word => word[i] === char)) {
        return prefix;
      }
      return prefix + char;
    }, '');
  
    return commonPrefix;
}
console.log(filterPrefix(["programming", "product", "procrastination"]))


const transformArrays=(arr, length)=> {
  const concatArr = arr.reduce((acc, curr) => acc.concat(curr), []);
  if (concatArr.length % length === 0) { 
    return concatArr.reduce((acc, _, index) => {
      if (index % length === 0) { 
        acc.push(concatArr.slice(index, index + length));
      }
      return acc;
    }, []);
  } else {
    const result = [];
    let tempArr = [];
    concatArr.forEach((element, index) => {
      tempArr.push(element);
      if ((index + 1) % length === 0 || index === concatArr.length - 1) { 
        result.push(tempArr);
        tempArr = [];
      }
    });
    return result;
  }
}
const arr1 = [[1,2], [3,4], [5,6]];
console.log(transformArrays(arr1, 3));

const arr2 = [[1,2], [3,4], [5,6], [7]];
console.log(transformArrays(arr2, 3));

const arr3 = [[1,2,3], [4,5,6]];
console.log(transformArrays(arr3, 2));



