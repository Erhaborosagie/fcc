let lg = console.log;

function reverseString(str) {
  //change to array
  //reverse
  //back to string
  return str
    .split("")
    .reverse()
    .join("");
}

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

function findLongestWordLength(str) {
  let strArr = str.split(" ");
  let arrLen = [];
  for (let i = 0; i < strArr.length; i++) {
    arrLen.push(strArr[i].length);
  }
  return arrLen.reduce((a, b) => {
    return Math.max(a, b);
  });
}

//lg(findLongestWordLength("The quick brown fox jumped over the lazy"));

function largestOfFour(arr) {
  // You can do this!
  largeArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i].reduce((a, b) => {
      return Math.max(a, b);
    });
    largeArr.push(element);
  }
  return largeArr;
}

//lg(largestOfFour([[4, 5, 1, 3],[13, 27, 18, 26],[32, 35, 37, 39],[1000, 1001, 857, 1]]));

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let len = str.length;
  let lenTa = target.length;
  return str.slice(len - lenTa, len) == target;
}

//lg(confirmEnding("Congratulation", "on"));
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num < 1) {
    return "";
  }
  let te = [];
  for (let i = 0; i < num; i++) {
    te.push(str);
  }
  return te.join("");
}

//lg(repeatStringNumTimes("abc", 3));
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num < str.length) {
    return str.slice(0, num) + "...";
  }
  return str.slice(0, num);
}

//lg(truncateString("A-tisket a-tasket A green and yellow basket", 8));

function findElement(arr, func) {
  /**
   * Basic Algorithm Scripting: Finders Keepers
   * Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

     Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
   */
  let num = undefined;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return num;
}

//lg(findElement([1, 7, 3, 9], num => num % 2 === 0));

function booWho(bool) {
  /**
   * Basic Algorithm Scripting: Boo who Check if a value is classified as a boolean primitive. Return true or false.

    Boolean primitives are true and false.
   */
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool == "boolean";
}

//lg(booWho(null));

function titleCase(str) {
  let strA = str.toLowerCase().split(" ");
  let newStr = [];
  for (let i = 0; i < strA.length; i++) {
    newStr.push(strA[i][0].toUpperCase() + strA[i].slice(1));
  }

  return newStr.join(" ");
}

//lg(titleCase("I'm a little tea pot"));

function frankenSplice(arr1, arr2, n) {
  /**
   * Basic Algorithm Scripting: Slice and Splice
You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
   */
  // It's alive. It's alive!
  let arr2Slice = arr2.slice(0, arr2.length);
  arr2Slice.splice(n, 0, ...arr1);

  return arr2Slice;
}

//lg(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function bouncer(arr) {
  /**
   * Basic Algorithm Scripting: Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
   */
  // Don't show a false ID to this bouncer.
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) == true) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

//lg(bouncer([7, "ate", "", false, 9]));

function getIndexToIns(arr, num) {
  /**
   * Basic Algorithm Scripting: Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
   */
  // Find my place in this sorted array.
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < sortedArr.length; i++) {
    if (num <= sortedArr[i]) {
      return i;
    }
  }
  return sortedArr.length;
}

//lg(getIndexToIns([40, 60], 50));

function mutation(arr) {
  /**Basic Algorithm Scripting: Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien". */
  let arr1 = [];
  for (let i = 0; i < arr[1].length; i++) {
    arr1.push(arr[1].charAt(i).toUpperCase());
  }
  let arr0 = [];
  for (let i = 0; i < arr[0].length; i++) {
    arr0.push(arr[0].charAt(i).toUpperCase());
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr0.indexOf(arr1[i]) == -1) {
      return false;
    }
  }
  return true;
}

//lg(mutation(["Alien", "lines"]));

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  let i = 0;
  while (i < arr.length) {
    newArr.push([...arr.slice(i, i + size)]);
    i = i + size;
  }
  return newArr;
}

lg(chunkArrayInGroups(["a", "b", "c", "d"], 2));
