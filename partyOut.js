function findOutlier(integers) {
  let odd = [];
  let even = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      even.push(integers[i]);
    } else {
      odd.push(integers[i]);
    }
  }
  if (odd.length === 1) {
    return odd[0];
  } else {
    return even[0];
  }
}

console.log(findOutlier([0, 1, 2]));
